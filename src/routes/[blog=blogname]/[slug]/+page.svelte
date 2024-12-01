<script>
	import { page } from '$app/stores';
	import Blogpost from '$lib/components/Blogpost.svelte';
	let { data } = $props();
	let blog = $derived($page.params.blog);
</script>

<div class="post flex justify-center">
	<Blogpost document={data.document.document} metadata={data.document.metadata} {blog} />
</div>

<style>
	.post {
		counter-reset: note;
	}
</style>
