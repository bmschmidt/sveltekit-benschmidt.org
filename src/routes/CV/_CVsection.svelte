<script>
	export let name;
	export let values;
	import Entry from './_CVitem.svelte';
</script>

<div class="col-span-2 text-right">
	<div>
		{name}
	</div>
</div>

<div class="col-span-6 flex-col">
	<ul>
		{#each values as item}
			<li>
				<Entry {item} {name} />
			</li>
		{/each}
	</ul>
</div>
