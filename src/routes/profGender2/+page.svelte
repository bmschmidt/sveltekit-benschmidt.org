<script>
	import Bookworm from 'bookworm-vega';
	import { onMount } from 'svelte';
	import { dev } from '$app/env';

	let word = 'funny';

	$: query = {
		database: 'RMP3',
		host: dev ? 'http://localhost:10012' : '//',
		search_limits: {
			department__id: { $lte: 20 },
			gender: ['male', 'female'],
			word: word.split(',').map((d) => d.replace(/ $/, ''))
		},
		words_collation: 'Case_Insensitive',
		aesthetic: {
			x: 'WordsPerMillion',
			y: 'department',
			color: 'gender'
		},
		plottype: 'pointchart',
		vega: {
			title: `Usage of word(s) ${word} as share within each set.`
		}
	};

	let bookworm = undefined;
	onMount(async () => {
		console.log({ query });
		const vegaEmbed = await import('vega-embed');
		Bookworm.prototype.getVegaEmbed = function () {
			console.log(vegaEmbed);
			return Promise.resolve(vegaEmbed.default);
		};
		bookworm = new Bookworm(query, '#bookworm');
		bookworm.plotAPI(query);
	});
	function plot() {
		bookworm.plotAPI(query);
	}
</script>

<div id="reset" class="absolute left-0 top-0 flex w-full m-20 h-full">
	<div id="bookworm" class="shadow-xlg m-15 fill-violet-40 w-1/2 h-100">
		{word}
	</div>
	<div id="query" class="w-1/2">
		<input type="text" id="query-input" bind:value={word} placeholder="good teacher" />
		<button w-full violet-90 on:click={plot}>Search</button>
	</div>
</div>
