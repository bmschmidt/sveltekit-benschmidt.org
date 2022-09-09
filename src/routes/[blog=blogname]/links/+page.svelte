<script>
	export let data;
</script>

<div class="flex flex-row flex-wrap">
	{#each data.post as post}
		<div class="m-3">
			<a href="/{post}">{post}</a>
		</div>
	{/each}
</div>
