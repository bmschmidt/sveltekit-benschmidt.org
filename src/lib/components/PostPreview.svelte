<script lang="ts">
	import { Document } from "quires";

	const { document } = $props();
	// import Elements from 'pandoc-svelte-components/Elements.svelte';
	function trim(doc: Quire<Document>): Quire<Document> {
		const content = {...doc.content, children: doc.content.children.slice(0, 1)};
		const newer = { ...doc, content };
		return newer;
	}

	let blocks = $derived(trim(document.document));
</script>

<div>
	{#if blocks}
		<Document quire={document.document} />
	{/if}
</div>
