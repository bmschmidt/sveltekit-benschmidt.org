<script>
	export let data;
	export let settings;
	import Elements from 'pandoc-svelte-components/Elements.svelte';
	const [[_id, _classes, _attrs], elems, [url, text]] = data;

	const id = _id || '';
	const classes = _classes || [];
	const attrs = Object.fromEntries(_attrs || []);
</script>

{#if settings.nolink}
	<Elements {settings} {elems} />
{:else}
	<a {id} {...attrs} class={classes.join(' ')} href={url} title={text}
		><Elements {settings} {elems} /></a
	>
{/if}
