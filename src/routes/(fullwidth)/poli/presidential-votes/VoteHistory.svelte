<script lang="ts">
	import { desc, escape, fromCSV, op, Table } from 'arquero';
	import { onMount } from 'svelte';
	import { linear_us_state_order } from './order';
	import ObservablePlot from '$lib/components/observablePlot.svelte';
	import * as Plot from '@observablehq/plot';

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

	let state_data = $state<null | Record<string, any>[]>(null);

	async function load() {
		const tb = fromCSV(await fetch('/notebooks/24_prez_results.csv').then((d) => d.text()))
			.derive({ PVI: (d) => +d.PVI })
			.derive({ lean: escape((d) => (d.winner_party == 'Democratic' ? d.PVI : -d.PVI)) })
			.groupby(['State'])
			.orderby('year')
			.derive({
				dem_percent: escape((d) =>
					d.winner_party == 'Democratic' ? d.winner_percent : 1 - d.winner_percent
				)
			})
			.derive({
				shift: (d) => d.lean - 0.5 * (op.lag(d.lean, 2) + op.lag(d.lean, 1)),
				shift_abs: (d) =>
					d.dem_percent - 0.5 * (op.lag(d.dem_percent, 2) + op.lag(d.dem_percent, 1))
			});

		const topParties = tb
			.groupby(['winner_party'])
			.count()
			.derive({ party: (d) => (d.count >= 5 ? d.winner_party : 'Other') });

		console.log({ topParties });
		state_data = tb
			.join(topParties)
			.objects()
			.map((d) => {
				return {
					...d,
					label: `${d.winner_name} won ${d.State} in ${d.year} with ${(d.winner_percent * 100).toFixed(2)}% of the vote.`
				};
			}) as Record<string, any>[];
	}
	onMount(() => load());

	type Metric = { domain: [number, number]; field: string; description: string };
	const domains: Record<Option, Metric> = {
		'Dem. percent of two-party share': {
			domain: [0.35, 0.65],
			field: 'dem_percent',
			description:
				'The percentage of the *two-party* vote share captured by the Democratic or Democratic-Republican candidate. In years where the Democratic party split (e.g. 1860, 1948, 1968), this metric may be weird.'
		},
		'Lean relative to country': {
			domain: [-0.15, 0.15],
			field: 'lean',
			description: 'The partisan lean of this state relative to the rest of the country.'
		},
		'Swing from two previous elections relative to country': {
			domain: [-0.1, 0.1],
			field: 'shift',
			description:
				'The shift in democratic share compared to the two previous elections *relative to the rest of the country*.'
		},
		'Swing from two previous elections': {
			field: 'shift_abs',
			domain: [-0.2, 0.2],
			description: 'The shift in democratic share compared to the two previous elections'
		},
		Winner: {
			// @ts-expect-error numbers not strings.
			domain: ['Republican', 'Democrat', 'Whig'],
			field: 'party',
			description:
				"The winning party. I haven't put much care into coloring beyond the first three parties here."
		}
	};

	let domain = $derived(domains[variable].domain);
	let field = $derived(domains[variable].field);
	let all_parties = $derived([...new Set(state_data?.map((d) => d.party))]);
	let makePlot: null | (() => Plot.Plot) = $derived.by(() => {
		if (state_data === null) return null;
		const states_here = new Set(state_data.map((d) => d.State));
		return () =>
			Plot.plot({
				padding: 0,
				marginLeft: 100,
				width: 800,
				height: 640,
				grid: false,
				x: {
					axis: 'top',
					label: 'year',
					ticks: [1800, 1820, 1840, 1860, 1880, 1900, 1920, 1940, 1960, 1980, 2000, 2020],
					tickFormat: (d) => '' + d
				},
				y: {
					axis: 'left',
					label: 'state',
					domain:
						order === 'geography'
							? linear_us_state_order.filter((d) => states_here.has(d))
							: undefined
				},
				color:
					variable === 'Winner'
						? {
								type: 'ordinal',
								domain: [
									'Republican',
									'Democratic',
									...all_parties.filter((p) => !['Democratic', 'Republican'].includes(p))
								],
								scheme: 'set1',
								legend: true
							}
						: { type: 'linear', scheme: 'RdBu', domain, legend: true },
				marks: [
					Plot.cell(state_data, {
						x: 'year',
						y: 'State',
						fill: field,
						inset: 0.5
					}),
					Plot.tip(state_data, Plot.pointerX({ x: 'year', y: 'State', title: 'label' }))
				]
			});
	});
</script>

{#if makePlot}
	<div class="w-[90vw]">
		<ObservablePlot plot={makePlot}></ObservablePlot>
	</div>
{/if}
