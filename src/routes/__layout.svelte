<script lang="ts">
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ben Schmidt</title>
  <meta name="description" content="Ben Schmidt's personal website.">
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<main>
  <div>
  <Header> </Header>
  <slot name="fullscreen">

  </slot>
  </div>
  <div class="flex flex-row relative mt-36 md:mt-36 ml-5">
    <div class="basis-1/6 md:basis-1/4"></div>
    <div class="basis-2/3 md:basis-1/2">
      <slot></slot>
    </div>
    <div class="basis-1/6 md:basis-1/4"></div>
  </div>
</main>