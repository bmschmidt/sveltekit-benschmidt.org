<script>
	export let data;
	$: posts = data.posts;
</script>

<div class="flex flex-row flex-wrap">
	{#each posts as post}
		<div class="m-3">
			{JSON.stringify(post)}
		</div>
	{/each}
</div>
