<script lang="ts">
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
		<div class="p-6 rounded article prose prose-slate post">
			{#if post.metadata.draft}
				<div class="text-red-500">Draft -- dev mode only</div>
			{/if}
			<span class="text-slate-500">
				{new Date(post.metadata.date).toString().slice(4, 15)}
			</span>
			<div class="flex flex-col">
				<a href="/{blog}/{post.slug}/">{post.metadata.title}</a>
			</div>
			<div>
				<PostPreview document={post} />
			</div>
		</div>
	{/if}
{/each}

<style>
	.post:not(:last-child)::after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: #333;
		margin-top: 10px; /* Adjust the spacing to your preference */
	}
</style>
