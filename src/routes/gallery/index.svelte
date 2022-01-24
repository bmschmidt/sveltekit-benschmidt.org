
<script>
  import GalleryItem from '$lib/components/GalleryItem.svelte'
  import item_text from '$lib/gallery_items.yml?raw'
  import yaml from 'js-yaml'
  const items = yaml.load(item_text)
</script>

<svelte:head>
  <title>Visualizations Gallery</title>
</svelte:head>

<div class="mr-30 ml-30 mt-20">
  <h1> Map and Data Visualization Gallery</h1>  
</div>
<div class="absolute left-0 container px-5 mx-auto" max-width="300px">
  <div class="flex flex-wrap m-2">
    {#each items as item}
      <GalleryItem {...item} ></GalleryItem>
    {/each}
  </div>
</div>