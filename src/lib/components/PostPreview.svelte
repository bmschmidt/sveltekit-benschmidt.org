<script lang="ts">
	import { Document } from 'quires';
	import NoImage from '$lib/quires/no-image.svelte';
	import Details from '$lib/quires/details.svelte';
	const { document } = $props();
	// import Elements from 'pandoc-svelte-components/Elements.svelte';
	const quireComponents = [
		{
			selector: 'image',
			tag: 'image',
			component: NoImage
		},
		{
			selector: 'code_block.component',
			tag: 'code_block',
			component: NoImage
		},
		{
			selector: 'footnote_ref',
			tag: 'footnote_ref',
			component: NoImage
		}
	];
	function trim(doc: Quire<Document>): Quire<Document> {
		const content = { ...doc.content, children: doc.content.children.slice(0, 1) };
		const newer = {
			...doc,
			content: { ...content, references: {}, footnotes: {} },
			quireComponents
		};
		return newer;
	}

	let blocks = $derived(trim(document.document));
</script>

<div>
	{#if blocks}
		<Document quire={blocks} />
	{/if}
</div>
