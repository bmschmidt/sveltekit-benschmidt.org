<script lang="ts">
  import '/src/app.css';

  import Header from '$lib/components/Header.svelte';
</script>

<main>
  <div class="mb-20">
    <Header> </Header>
  </div>
  <div>
      <slot></slot>
  </div>
</main>