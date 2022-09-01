<script>
	import { dev } from '$app/env';
	import Document from 'pandoc-svelte-components/Document.svelte';
	export let posts;
	console.log({ posts });
</script>

{#each posts as post}
	{#if dev || !post.metadata.draft}
		<div class="article mb-10 prose prose-slate">
			<div>
				<a
					class="hover:underline no-underline {post.metadata.draft
						? 'text-red-700'
						: 'text-violet-700'} transition"
					href="/{post.path}/">{post.metadata.title}</a
				>
				<span class="text-slate-500">
					{new Date(post.metadata.date).toString().slice(4, 15)}
				</span>
			</div>
			<div>
				<Document ast={post.document} />
			</div>
		</div>
	{/if}
{/each}
