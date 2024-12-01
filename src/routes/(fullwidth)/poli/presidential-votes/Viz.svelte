<script lang="ts">
	import VoteHistory from './VoteHistory.svelte';
	const options = [
		'Dem. percent of two-party share',
		'Lean relative to country',
		'Swing from two previous elections relative to country',
		'Swing from two previous elections',
		'Winner'
	] as const;
	const ordering = ['geography', 'alphabetical order'];

	type Option = (typeof options)[number];
	type Ordering = (typeof ordering)[number];
	let {
		variable = 'Lean relative to country',
		order = 'geography'
	}: { variable?: Option; order?: Ordering } = $props();
</script>

<div class="selection-grid">
	<label for="#select-variable">Quantity</label>
	<div class="select-wrapper">
		<select id="select-variable" bind:value={variable}>
			{#each options as o}
				<option value={o}>{o}</option>
			{/each}
		</select>
	</div>
	<label for="#select-variable">Order states by</label>
	<div class="select-wrapper">
		<select id="select-variable" bind:value={order}>
			{#each ordering as o}
				<option value={o}>{o}</option>
			{/each}
		</select>
	</div>
</div>

<VoteHistory {variable} {order}></VoteHistory>

<style>
	.selection-grid {
		@apply grid grid-cols-10 gap-2;
	}
	.selection-grid > label {
		@apply col-span-2;
	}
	.selection-grid > .select-wrapper {
		@apply col-span-8;
	}
</style>
