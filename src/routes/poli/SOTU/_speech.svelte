<script>
  export let paragraphs = [];
  export let id = null;
  export let selected_word = "";
  export let haplaxes = [];
  import { beforeUpdate, afterUpdate } from "svelte";
  function select_paragraph(para_id) {
    if (id !== para_id) {
      console.log({id, para_id})
      id = para_id;
    }
  }
  let observer = null;

  function observe() {

    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const para_id = entry.target.getAttribute("data-id");
            select_paragraph(para_id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-20% -19% -79% -19%"
      }
    );
    const paras = document.getElementsByClassName("paragraph");
    for (let i = 0; i < paras.length; i++) {
      observer.observe(paras[i])
    }
  }
  beforeUpdate( () => {
    if (observer) {
      observer.disconnect();
    }
  })
  afterUpdate( () => {
    observe();
  })
</script>
{#each paragraphs as [para_id, paragraph]}
<p class:bg-blue-100={id==para_id} class="transition paragraph rounded mt-3 text-sm" data-id="{para_id}">
  <button class="rounded hover:bg-blue-300" on:click={() => select_paragraph(para_id)}>
    <span class="text-xs">{para_id}</span>
  </button>
  { paragraph }
</p>
{/each}