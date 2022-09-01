<script>
	export let data;
	$: html = data.html;
	$: attributes = data.attributes;
	import Blogpost from '$lib/components/Blogpost.svelte';
</script>

<Blogpost {html} {attributes} />
