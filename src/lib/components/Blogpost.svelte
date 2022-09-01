<script>
	export let attributes;
	export let html;
</script>

<article class="prose text-lg w-full">
	<h1>{attributes.title}</h1>
	<div class="text-slate-500">{new Date(attributes.date).toString().slice(4, 15)}</div>
	<div>
		{#each attributes.tags as tag}
			<a class="mr-5" href="/post/tag/{tag}">{tag}</a>
		{/each}
	</div>
	{@html html}
</article>

<style>
</style>
