<script lang="ts">
  export let document;
  import Elements from 'pandoc-svelte-components/Elements.svelte';

  function trim(doc) {
    const blocks = []
    const docblocks = [...doc.blocks]
    while (docblocks.length > 0 && JSON.stringify(blocks).length < 350) {
      const entry = docblocks.shift();
      blocks.push(entry);
    }
    const last = blocks[blocks.length - 1]
    if (JSON.stringify(blocks).length > 750 && last.t === "Div") {
      const last = blocks.pop();

      blocks.push({'t': "Div", 'c': [last.c[0],  trim({blocks : last.c[1]})]})
    }

    return blocks
  }

  $: blocks = trim(document.document)
</script>


<div>
  {#if blocks}
    <Elements elems={blocks} settings={{}} />
  {/if}
</div>

