<script>
	import GalleryItem from '$lib/components/GalleryItem.svelte';
	import item_text from './gallery_items.yml?raw';
	import yaml from 'js-yaml';
	const items = yaml.load(item_text);
</script>

<svelte:head>
	<title>Visualizations Gallery</title>
</svelte:head>



<div class="absolute left-0 container px-5 mx-auto" max-width="300px">
	<div class="text-xl ml-4">
		<h1>Map and Data Visualization Gallery</h1>
	</div>
	<div class="flex flex-wrap m-2">
		{#each items as item}
			<GalleryItem {...item} />
		{/each}
	</div>
</div>
