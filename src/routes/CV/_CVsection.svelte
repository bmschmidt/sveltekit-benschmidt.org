<script>
  export let name;
  export let values;
  import Entry from './_CVitem.svelte'
</script>

<div class="col-span-1 text-right">
  <div>
    {name}
  </div>
</div>

<div class="col-span-7 flex-col">
  <ul>
  {#each values as item}
    <li>
      <Entry {item} {name}></Entry>
    </li>
  {/each}
  </ul>
</div>