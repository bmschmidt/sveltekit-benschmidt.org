<script lang="ts">
	export let document;
	export let metadata;
	export let blog;
	import Header from './Elements/Header.svelte';
	import Link from './Elements/Link.svelte';
	import { Document, Sidenote } from 'pandoc-svelte-components';
</script>

<article class="prose text-lg w-full ml-2">
	<h1>{metadata.title}</h1>
	<div class="text-slate-500">{new Date(metadata.date).toString().slice(4, 15)}</div>
	<div>
		{#each metadata.tags as tag}
			<a class="mr-5" href="/{blog}/tag/{tag}/">{tag}</a>
		{/each}
	</div>
	<Document
		ast={document}
		settings={{ nolink: false, elements: { Note: Sidenote, Header, Link } }}
	/>
</article>
