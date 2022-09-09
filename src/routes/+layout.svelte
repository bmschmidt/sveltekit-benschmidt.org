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
		<div class="relative mt-36 md:mt-36 ml-5">
			<slot />
		</div>
	</div>
</main>
