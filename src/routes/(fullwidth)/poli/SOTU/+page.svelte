<script lang="ts">
	import { initDB } from '$lib/duckdb/old_duckdb';
	import Speech from './_speech.svelte';
	import Comparison from './_Comparison.svelte';
	import { browser } from '$app/environment';
	$: conn_prom = new Promise(() => {});
	$: prepped_prom = new Promise(() => {});
	$: paragraphs = [];

	let prepped = false;

	async function prep_db() {
		if (prepped) return;
		const conn = await conn_prom;
		await conn.query(`DROP TABLE IF EXISTS tokens;`);
		await conn.query(`DROP TABLE IF EXISTS lengths;`);
		await conn.query(`DROP VIEW IF EXISTS tokens_pass_1;`);
		await conn.query(`DROP TABLE IF EXISTS tf_table;`);
		await conn.query(`DROP TABLE IF EXISTS tfidf_lengths;`);
		await conn.query(`CREATE OR REPLACE TABLE p1 AS SELECT * FROM parquet_scan('new.parquet')`);
		await conn.query(`CREATE OR REPLACE TABLE wordcounts AS SELECT "@id" id, 
        UNNEST("nc:unigrams").word0 as word, 
        UNNEST("nc:unigrams").count as count FROM
         p1;
    `);
		await conn.query(`CREATE VIEW tokens_pass_1 
        AS SELECT word, COUNT(*) df, SUM(count) word_total
        FROM wordcounts 
        GROUP BY word`);
		await conn.query(`
      CREATE TABLE tokens AS SELECT word, log((SELECT MAX(df) FROM tokens_pass_1) / df) as idf,
      df, word_total FROM tokens_pass_1;
    `);
		await conn.query(`CREATE TABLE lengths 
        AS SELECT id, COUNT(*) n_tokens, SUM(count) wordcount 
        FROM wordcounts 
        GROUP BY id`);
		await conn.query(`
    CREATE TABLE "tf_table" AS 
    SELECT word, id, count::FLOAT/wordcount as tf, count::FLOAT / wordcount * idf as tfidf
    FROM wordcounts w NATURAL JOIN tokens NATURAL JOIN lengths l;
    `);
		const r1 = await conn.query(`SELECT * FROM tf_table LIMIT 10`);
		await conn.query(`
    CREATE TABLE tfidf_lengths AS SELECT id, sqrt(SUM(tfidf ^ 2)) as tfidf_mag 
    FROM tf_table GROUP BY id;`);
		prepped_prom = Promise.resolve();
	}

	async function load_db() {
		const db = await initDB('/files/parquet/new.parquet', 'new.parquet');
		conn_prom = db.connect();
		await prep_db();
		return conn_prom;
	}

	$: configuration = prepped_prom.then(() => get_year(year));

	if (browser) {
		load_db();
	}

	async function get_year(year) {
		const conn = await conn_prom;
		const res = await conn.query(`
      SELECT * FROM p1 WHERE year == ${year}
    `);
		const paragraph_set = res.getChild('nc:text').toArray();
		const ids = res.getChild('@id').toArray();
		paragraphs = paragraph_set.map((p, i) => [ids[i], p]);
	}
	$: year = 2014;
	const years = [];
	for (let y = 1934; y < 2021; y++) {
		years.push(y);
	}

	$: selected_id = null;
	$: nearest = null;
	$: {
		if (selected_id !== null && browser) {
			prepped_prom.then(async () => {
				nearest = null;

				const conn = await conn_prom;
				await conn.query(`
          CREATE OR REPLACE VIEW v1 AS SELECT id,
            SUM(tfidf) as tfidf_score,
            SUM(tfidf * r_tfidf) / 
            (FIRST(tfidf_mag) * FIRST(r_tfidf_mag)) AS cosine_sim
            FROM 
            tf_table 
            NATURAL JOIN
            tfidf_lengths
            NATURAL JOIN
            (
              SELECT id as rightid,
              word, 
              tfidf_mag as r_tfidf_mag,
              tfidf as r_tfidf FROM
              tf_table NATURAL JOIN tfidf_lengths 
              WHERE id = '${selected_id}'
            ) searchdoc
            WHERE id != '${selected_id}'
            GROUP BY id
            ORDER BY cosine_sim DESC
            LIMIT 10
        `);
				await conn.query(`
        CREATE OR REPLACE VIEW overlappings AS SELECT id,
          LIST(word) words FROM 
          tf_table r1 NATURAL JOIN v1 NATURAL JOIN (
            SELECT word FROM tf_table WHERE id = '${selected_id}'
          ) t1 
          NATURAL JOIN tokens
          WHERE idf > .33
          GROUP BY id;
        `);
				const matches = await conn.query(`
          CREATE OR REPLACE VIEW top_matches
          AS SELECT id,  tfidf_score, 
           cosine_sim, president, year, "nc:text", "@id"
          FROM v1 JOIN p1 ON "v1"."id" = p1."@id"          
        `);
				const closest = await conn.query(
					`SELECT * FROM top_matches NATURAL JOIN overlappings ORDER BY cosine_sim DESC LIMIT 5;`
				);
				nearest = [];
				for (let i of [0, 1, 2, 3]) {
					nearest = [...nearest, closest.get(i)];
				}
			});
		}
	}
</script>

<div class="mt-20" />
<div class="mx-20 prose my-20">
	<p>
		This is the first demonstration I've made of possibilities for mixing the <a
			href="https://nonconsumptive.org">nonconsumptive</a
		>
		format for distributing collections of text with the new possibilities of in-browser computation
		offered by
		<a href="https://duckdb.org/2021/10/29/duckdb-wasm.html">DuckDB's WASM module</a>.
	</p>
	<p>
		The data here is are State of the Union addresses from the last 90 years; this page loads all of
		them in a small (2.7MB) file including all metadata and pre-computed wordcounts, and then runs
		some basic queries so that as you read.
	</p>
</div>

<div class="flex">
	<div class="w-full md:w-1/4 lg:w-1/6">
		<div class="flex flex-row flex-wrap">
			{#each years as y}
				<div
					class="m-1 p-1 bg-blue-100 hover:bg-blue-400 hover:text-white text-black text-sm m-1 p-1 rounded"
					on:click={() => {
						year = y;
					}}
				>
					{y}
				</div>
			{/each}
		</div>
	</div>
	<div class="w-full md:w-1/2">
		{#await conn_prom}
			Waiting for database
		{:then conn}
			<Speech {paragraphs} bind:id={selected_id} />
		{/await}
	</div>
	<div class="w-1/4 fixed mt-20 top-10 right-0 text-sm">
		{#if nearest !== null}
			<div class="bg-white shadow-md rounded p-4">
				Most similar paragraphs to {selected_id}
				{#each nearest as row}
					<Comparison {row} />
				{/each}
			</div>
		{/if}
	</div>
</div>
