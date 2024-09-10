
class Database() {
  constructor() {

  }
  
	async prep_db(conn) {
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