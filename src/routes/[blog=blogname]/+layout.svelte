<script>
	import { page } from '$app/stores';

	let { children } = $props();
	let blog = $derived($page.params.blog);
</script>

{#if blog !== 'post'}
	<div class="prose place-content-center m-10 border bg-red-100 p-5">
		{#if blog == 'posts'}
			You are looking at archived content from my "Bookworm" blog, an experiment that ran from
			2014-2016. Not all content may work. For current posts, see <a href="/post">here</a>.
		{:else if blog === 'sappingattention'}
			You are looking at content from <em>Sapping Attention</em>, which was my primary blog from
			2010 to 2015; I am republishing all items from there on this page, but for the foreseeable
			future you should be able to read them in their original form at
			<a href="https://sappingattention.blogspot.com">sappingattention.blogspot.com</a>. For current
			posts, see <a href="/post">here</a>.
		{/if}
	</div>
{/if}

{@render children()}
