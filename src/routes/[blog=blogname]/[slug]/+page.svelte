<script>
	export let data;
	$: metadata = data.document.metadata;
	$: document = data.document.document;
	import Blogpost from '$lib/components/Blogpost.svelte';
</script>

<Blogpost {metadata} {document} />
