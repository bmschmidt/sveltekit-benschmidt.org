<script lang="ts">
	const { quire } = $props();
	import { Block, Inline } from 'quires';
	let children = $derived(quire.content.children);
	let summary = $derived(quire.content.attributes?.summary || 'expand');
</script>

<details>
	{#if summary}
		<summary>
			{summary}
		</summary>
	{/if}
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</details>
