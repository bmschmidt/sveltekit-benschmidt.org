<script lang="ts">
  import '../../app.css';

  import Header from '$lib/components/Header.svelte';
</script>

<main>
  <div>
  <Header> </Header>
  </div>
  <div>
      <slot></slot>
  </div>
</main>