<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ben Schmidt</title>
	<meta name="description" content="Ben Schmidt's personal website." />
	<html lang="en" />
</svelte:head>

<main>
	<div>
		<Header />
		<slot name="fullscreen" />
	</div>
	<div class="flex flex-row relative mt-36 md:mt-36 ml-5">
		<div class="basis-1/6 md:basis-1/4" />
		<div class="w-full md:w-1/2">
			<slot />
		</div>
		<div class="basis-1/6 md:basis-1/4" />
	</div>
</main>
