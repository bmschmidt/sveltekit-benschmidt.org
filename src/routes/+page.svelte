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
				<a
					href="https://vis.social/@benmschmidt"
					rel="me"
					class="underline violet-800 m-1 hover:orange-800"
				>
					<svg viewBox="0 0 16 16" width="24" height="24"
						><path
							d="M 15.659 9.592 C 15.424 10.72 13.553 11.956 11.404 12.195 C 10.283 12.32 9.18 12.434 8.003 12.384 C 6.079 12.302 4.56 11.956 4.56 11.956 C 4.56 12.13 4.572 12.297 4.595 12.452 C 4.845 14.224 6.478 14.33 8.025 14.379 C 9.586 14.429 10.976 14.02 10.976 14.02 L 11.04 15.337 C 11.04 15.337 9.948 15.884 8.003 15.984 C 6.93 16.039 5.598 15.959 4.047 15.576 C 0.683 14.746 0.104 11.4 0.015 8.006 C -0.012 6.998 0.005 6.048 0.005 5.253 C 0.005 1.782 2.443 0.765 2.443 0.765 C 3.672 0.238 5.782 0.017 7.975 0 L 8.029 0 C 10.221 0.017 12.332 0.238 13.561 0.765 C 13.561 0.765 15.999 1.782 15.999 5.253 C 15.999 5.253 16.03 7.814 15.659 9.592 Z M 13.124 5.522 L 13.124 9.725 L 11.339 9.725 L 11.339 5.646 C 11.339 4.786 10.951 4.35 10.175 4.35 C 9.317 4.35 8.887 4.867 8.887 5.891 L 8.887 8.124 L 7.113 8.124 L 7.113 5.891 C 7.113 4.867 6.683 4.35 5.825 4.35 C 5.049 4.35 4.661 4.786 4.661 5.646 L 4.661 9.725 L 2.876 9.725 L 2.876 5.522 C 2.876 4.663 3.111 3.981 3.582 3.476 C 4.067 2.971 4.703 2.712 5.493 2.712 C 6.406 2.712 7.098 3.039 7.555 3.695 L 8 4.39 L 8.445 3.695 C 8.902 3.039 9.594 2.712 10.507 2.712 C 11.297 2.712 11.933 2.971 12.418 3.476 C 12.889 3.981 13.124 4.663 13.124 5.522 Z"
							style="stroke:none;stroke-miterlimit:10;fill-rule:evenodd;"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
	<div class="w-2/3 mx-24 prose prose-stone prose-l">
		<h1 class="font-size-32">Ben Schmidt</h1>
		<Document ast={data.document} />
	</div>
</div>

<div id="blog" class="md:visible m-20 ">
	<h2 class="mb-2"><a class="text-xl" href="/post">Recent Blog Posts</a></h2>
	<div class="mb-6 ml-2">
		<a data-sveltekit-reload href="feed.xml">atom</a>
		<a data-sveltekit-reload href="rss.xml">rss</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		<Postgroup posts={data['recent_posts']} blog="post" />
	</div>
</div>
