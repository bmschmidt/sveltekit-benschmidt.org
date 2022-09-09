<script lang='ts'>
	import { dev } from '$app/environment';
	import PostPreview from './PostPreview.svelte';
	export let posts;
	export let blog;
	if (blog === undefined) {
		throw new Error('blog must be defined');
	}
</script>

{#each posts as post}
	{#if post && post.document && (dev || !post.metadata.draft)}
		<div class="hover:border-black transition border-white article mb-10 prose prose-slate border p-2">
			<div>
				<a
					class="hover:underline no-underline {post.metadata.draft
						? 'text-red-700'
						: 'text-violet-700'} transition"
					href="/{blog}/{post.slug}/">{post.metadata.title}</a
				>
				<span class="text-slate-500">
					{new Date(post.metadata.date).toString().slice(4, 15)}
				</span>
			</div>
			<div>
				<PostPreview document={post} />
			</div>
		</div>
	{/if}
{/each}
