<script lang="ts">
	export let data

	import { page } from '$app/stores';
	import Postgroup from '$lib/components/Postgroup.svelte';

</script>

<h1>Posts with tag {$page.params.tag}</h1>

<a href="/{$page.params.blog}/">Back to all posts</a>

<Postgroup posts={data.posts} blog={$page.params.blog}/>