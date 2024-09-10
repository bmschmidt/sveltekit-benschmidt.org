<script>
	import CV from '../../curriculum_vitae.yaml?raw';
	import yaml from 'js-yaml';
	import CVSection from './_CVsection.svelte';
	const cv = yaml.load(CV);
	const values = Object.entries(cv).filter((d) => d[1].map);
</script>

<div>
	<div class="grid gap-8 content-center grid-cols-8">
		{#each values as [name, v]}
			<CVSection {name} values={v} />
		{/each}
	</div>
</div>
