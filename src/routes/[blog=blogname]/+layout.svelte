<script>
  import { page } from '$app/stores'
  $: blog = $page.params.blog
</script>

{#if blog === 'blog'}

{:else if blog === 'sappingattention'}
  <em><em>Sapping Attention</em> was my primary blog from 2010 to 2015; I am republishing all items from there 
    on this page, but for the foreseeable future you should be able to read them in their original form at 
    <a href="https://sappingattention.blogspot.com">sappingattention.blogspot.com</a>.</em>
{/if}

<slot>

</slot>