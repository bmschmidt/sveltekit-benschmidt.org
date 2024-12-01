<script lang="ts">
	import * as Plot from '@observablehq/plot';

	let div: undefined | HTMLDivElement = $state(undefined);

	let { plot }: { plot: () => Plot.Plot } = $props();

	$effect(() => {
		if (div === undefined) {
			return;
		}
		if (div.firstChild) div.removeChild(div.firstChild);
		div.append(plot()); // add the new chart
	});
</script>

<div bind:this={div} role="img"></div>
