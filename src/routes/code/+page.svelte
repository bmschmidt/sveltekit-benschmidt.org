<script lang="ts">
	type Project = {
		title: string;
		description: string;
		url: string;
		language?: string[];
		github?: string;
	};
	import project_raw from './projects.yaml?raw';
	import yaml from 'js-yaml';
	const projects = yaml.load(project_raw);
</script>

<div class="grid place-content-center text-xl">
	<h2>Selected coding projects</h2>
</div>

{#snippet summary(project: Project)}
	<div class="border gray-50 rounded-xl shadow m-5 p-5">
		<h4 class="gray-800">{project.title}</h4>
		{@html project.description}
		<div class="flex justify-between">
			<div>
				{#if project.language}
					{#each project.language as lang}
						<span class="bg-gray-200 rounded p-1 m-1">{lang}</span>
					{/each}
				{/if}
			</div>
		</div>
		{#if project.url}
			<a href={project.url} class="text-blue-500 underline">Website</a>
		{/if}
		{#if project.github}
			<a href={project.github} class="text-blue-500 underline">GitHub</a>
		{/if}
	</div>
{/snippet}

<div class="container grid md:grid-cols-3 grid-cols-2 w-full">
	{#each projects as project}
		{@render summary(project)}
	{/each}
</div>
