<script>
	export let data;
	import { page } from '$app/stores';
	$: blog = $page.params.blog;
	import Blogpost from '$lib/components/Blogpost.svelte';
	console.log({ d: data.document.document });
</script>

<div class="flex justify-center">
	<Blogpost document={data.document.document} metadata={data.document.metadata} {blog} />
</div>
