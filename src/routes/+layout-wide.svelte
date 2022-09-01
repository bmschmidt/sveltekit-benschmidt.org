<script lang="ts">
	import '/src/app.css';

	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<div class="mb-20">
		<Header />
	</div>
	<div>
		<slot />
	</div>
</main>
