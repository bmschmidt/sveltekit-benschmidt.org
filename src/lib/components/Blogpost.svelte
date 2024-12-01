<script lang="ts">
	import Details from '$lib/quires/details.svelte';
	import SvelteComponent from '$lib/quires/svelte-component.svelte';
	import { select } from '@observablehq/plot';
	const { document, metadata, blog } = $props();
	import { Document } from 'quires';
	const quire = {
		...document,
		quireComponents: [
			{
				tag: 'code_block',
				selector: 'code_block.component',
				component: SvelteComponent
			},
			{
				tag: 'div',
				selector: 'div.details',
				component: Details
			}
		]
	};
</script>

<article class="prose text-lg w-full ml-2">
	<h1>{metadata.title}</h1>
	<div class="text-slate-500">{new Date(metadata.date).toString().slice(4, 15)}</div>
	<div>
		{#each metadata.tags as tag}
			<a class="mr-5" href="/{blog}/tag/{tag}/">{tag}</a>
		{/each}
	</div>
	<Document {quire} notes="sidenotes" />
</article>
