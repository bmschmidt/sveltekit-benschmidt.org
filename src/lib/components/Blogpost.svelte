<script lang="ts">
	export let document;
	export let metadata;
	export let blog;
	import { Document } from "quires";
	const quire = {
		...document,
		quireComponents: [
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
