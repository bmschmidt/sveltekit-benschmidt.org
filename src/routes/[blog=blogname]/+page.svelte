<script>
	export let data;
	import { page } from '$app/stores';
	import Postgroup from '$lib/components/Postgroup.svelte';

	const tags = {};

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
		<div class="sticky top-20 mx-3 p-4 rounded-lg">
			<h2 class="mb-4 text-lg font-bold text-slate">Tags</h2>
			<ul class="space-y-2">
				{#each taglist as { tag, count }}
					<li class="flex items-center gap-2">
						<a href="/{whichblog}/tag/{tag}">
							<span class="hover:bg-white text-sm font-medium">{tag} </span>
							<span class="text-xs text-gray-500">({count})</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="basis-3/4 ml-4">
		<Postgroup posts={data.recent_posts} blog={whichblog} />
	</div>
</div>
