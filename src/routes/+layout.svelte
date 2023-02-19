<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<link rel="alternate" type="application/atom+xml" href="/feed.xml" title="Atom XML Feed" />

<link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS XML Feed" />

<main>
	<div>
		<Header />
		<slot name="fullscreen" />
		<div class="relative mt-36 ml-5">
			<slot />
		</div>
	</div>
</main>
