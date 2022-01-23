
<script>
  import GalleryItem from '$lib/components/GalleryItem.svelte'
  import item_text from '$lib/gallery_items.yml?raw'
  import yaml from 'js-yaml'
  const items = yaml.load(item_text)
</script>

<svelte:head>
  <title>Visualizations Gallery</title>
</svelte:head>

<div class="m-30 mt-20">
  <h3> Gallery </h3>
  I make a lot of visualizations and abstracted maps.
</div>
<div class="absolute left-0 container px-5 py-24 mx-auto" max-width="300px">
  <div class="flex flex-wrap m-2">
    {#each items as item}
      <GalleryItem {...item} ></GalleryItem>
    {/each}
  </div>
</div>