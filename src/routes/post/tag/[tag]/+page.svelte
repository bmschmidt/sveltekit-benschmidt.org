<script>
	import { page } from '$app/stores';
	const slug = $page.params.tag;
	import { post_index } from '$lib/markdown/markdown';
	import Postgroup from '$lib/components/Postgroup.svelte';
	post_index.sort((a, b) => (a.attributes.date > b.attributes.date ? -1 : 1));
	const posts = post_index.filter((d) => d.attributes.tags.indexOf(slug) > -1);
</script>

<h1>Posts with tag {slug}</h1>

<a href="/post/">Back to all posts</a>

<Postgroup {posts} />