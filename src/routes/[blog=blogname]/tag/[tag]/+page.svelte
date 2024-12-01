<script lang="ts">
	export let data;

	import { page } from '$app/stores';
	import Postgroup from '$lib/components/Postgroup.svelte';
</script>

<div class="max-w-4xl mx-auto my-6 p-4 rounded-lg">
	<div class="flex flex-gap w-full">
		<h1 class="text-2xl font-bold text-slate-700 mb-4">
			Posts with tag <span class="text-slate-800">{$page.params.tag}</span>
		</h1>
	</div>
	<hr class="border-gray-300 my-4" />
	<a
		href="/{$page.params.blog}/"
		class="text-blue-500 hover:text-blue-700 underline mb-6 block transition-colors"
	>
		&larr; Back to all posts
	</a>
	<Postgroup posts={data.posts} blog={$page.params.blog} />
</div>
