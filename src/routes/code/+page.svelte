<script>
	import project_raw from './projects.yaml?raw';
	import yaml from 'js-yaml';
	const projects = yaml.load(project_raw);
</script>

<div class="grid place-content-center text-xl">
	<h2>Selected coding projects</h2>
</div>

<div class="container grid md:grid-cols-3 grid-cols-2 w-full">
	{#each projects as project}
		<div class="border gray-50 rounded shadow m-5 p-5">
			<h4 class="gray-800">{project.title}</h4>
			{@html project.description}
		</div>
	{/each}
</div>
