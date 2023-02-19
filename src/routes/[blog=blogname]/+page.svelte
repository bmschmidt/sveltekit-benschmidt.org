<script>
	export let data;
	import { page } from '$app/stores';
	import Postgroup from '$lib/components/Postgroup.svelte';

	const tags = {};
	let visible_tags = undefined;

	for (let post of data.recent_posts) {
		for (let tag of post.metadata.tags) {
			tags[tag] = tags[tag] + 1 || 1;
		}
	}

	const taglist = Object.entries(tags).map(([tag, count]) => {
		return { tag, count };
	});

	taglist.sort((a, b) => b.count - a.count);
	$: whichblog = $page.params.blog;
</script>

<div class="flex">
	<div class="basis-1/4">
		<div class="sticky top-20 m-3">
			<h2 class="mb-2">Tags</h2>
			<ul>
				{#each taglist as { tag, count }}
					<li class="m-2">
						<a href="/{whichblog}/tag/{tag}">{tag}</a> ({count})
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="basis-1/2">
		<Postgroup posts={data.recent_posts} blog={whichblog} />
	</div>
</div>

<style>
</style>
