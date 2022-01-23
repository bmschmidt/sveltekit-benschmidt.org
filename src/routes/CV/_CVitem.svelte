<script>
  export let item
  export let name

  const keys = ["title", "item", "date", "place"]
</script>
{#if name == "appointment"}

{/if}
{#if typeof(item) == 'string'}
  {item}
{/if}
  {#each keys as key}
    {#if (item[key])}
      <span class="mr-1">{item[key]}</span>
    {/if}
{/each}
