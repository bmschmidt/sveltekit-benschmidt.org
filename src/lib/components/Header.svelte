<script>
	import settings from '$lib/settings';

	let toggled = false;
</script>

<nav class="flex top-0 z-50 w-full bg-gray-100 fixed items-center text-xl shadow-xl">
	<div class="flex-col flex md:flex-row">
		<div class="flex">
			<div on:click={() => (toggled = !toggled)} class="m-5 hamburger md:hidden fill-violet-800">
				<svg viewBox="0 0 100 80" width="40" height="40">
					<rect width="100" height="15" />
					<rect y="30" width="100" height="15" />
					<rect y="60" width="100" height="15" />
				</svg>
			</div>
			<div class="m-5 mr-10 hover:text-violet-400 sitename flex-0 text-2xl font-medium">
				<a href="/">{settings.header.title}</a>
			</div>
		</div>
		<div class="hidden md:flex subpages">
			{#each settings.header.links as link}
				<div class="link flex-wrap m-5 ">
					<a href={link.url} class="transition hover:text-violet-400">{link.text}</a>
				</div>
			{/each}
		</div>
		<div class:hidden={!toggled} class="bg-violet-100/75 flex flex-wrap md:hidden subpages">
			{#each settings.header.links as link}
				<div class="link flex-wrap m-5 ">
					<a href={link.url} class="transition hover:text-violet-400">{link.text}</a>
				</div>
			{/each}
		</div>
	</div>
</nav>

<style>
</style>
