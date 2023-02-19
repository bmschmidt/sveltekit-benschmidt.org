<script>
	export let data;
	import { Document } from 'pandoc-svelte-components';
	import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import LogoTwitter24 from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
	import Email24 from 'carbon-icons-svelte/lib/Email.svelte';
	import Education24 from 'carbon-icons-svelte/lib/Education.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import QID24 from 'carbon-icons-svelte/lib/QID.svelte';
	import Postgroup from '$lib/components/Postgroup.svelte';

	const roles = [
		{
			icon: Email24,
			link: 'mailto:bmschmidt@gmail.com'
		},
		{
			icon: LogoTwitter24,
			link: 'https://twitter.com/benmschmidt'
		},
		{
			icon: Education24,
			link: 'https://scholar.google.com/citations?user=QSmupT4AAAAJ&hl=en'
		},
		{
			icon: LogoGithub24,
			link: 'https://github.com/bmschmidt'
		},
		{
			icon: QID24,
			link: 'https://orcid.org/0000-0002-1142-5720'
		},
		{
			icon: LogoLinkedin,
			link: 'https://www.linkedin.com/in/benmschmidt/'
		}
	];
</script>

<div id="photo-and-desc" class="flex-col flex sm:flex-row items-center">
	<div
		id="img-and-links"
		class="flex flex-row items-center 
             sm:flex-col w-full sm:w-1/3"
	>
		<div class="w-full items-center">
			<img class="object-contain" src="/img/ben.png" alt="Ben Schmidt" />
		</div>
		<div id="links" class="backdrop-blur-sm relative z-10">
			<div class="p-4 sm:p-8 m-3 md:m-10 flex-wrap bg-white shadow-lg flex flex-col md:flex-row">
				{#each roles as role}
					<a href={role.link} class="underline violet-800 m-1 hover:orange-800">
						<svelte:component this={role.icon} size={24} />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-2/3 mx-24 prose prose-stone prose-l">
		<h1 class="font-size-32">Ben Schmidt</h1>
		<Document ast={data.document} />
	</div>
</div>

<div>
	<a data-sveltekit-reload href="feed.xml">atom</a>
	<a data-sveltekit-reload href="rss.xml">rss</a>
</div>

<div id="blog" class="md:visible m-20 ">
	<h2 class="mb-10"><a class="text-xl" href="/post">Recent Blog Posts</a></h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		<Postgroup posts={data['recent_posts']} blog="post" />
	</div>
</div>
