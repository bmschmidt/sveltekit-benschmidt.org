<script>
	export let data;
	import { page } from '$app/stores';
	$: blog = $page.params.blog;
	import Blogpost from '$lib/components/Blogpost.svelte';
</script>

<div class="post flex justify-center">
	<Blogpost document={data.document.document} metadata={data.document.metadata} {blog} />
</div>

<style>
	.post {
		counter-reset: note;
	}
</style>
