<script>
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import item_text from './gallery_items.yml?raw';
	import yaml from 'js-yaml';
	const items = yaml.load(item_text);
</script>

<svelte:head>
	<title>Visualizations Gallery</title>
</svelte:head>

<div class="left-0 container px-5 mx-auto">
	<div class="grid place-content-center text-xl">
		<h2>Map and Data Visualization Gallery</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-2">
		{#each items as item}
			<GalleryItem {...item} />
		{/each}
	</div>
</div>
