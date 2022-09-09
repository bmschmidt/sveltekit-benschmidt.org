<script>
	import Launch32 from 'carbon-icons-svelte/lib/Launch.svelte';
	export let src;
	export let title = 'TITLE';
	export let link;
	export let alt;
	export let description = '';
</script>

<div class="lg:w-1/3 lg:h-1/3 md:h-1/2 md:w-1/2 p-4">
	<div class="flex md:flex-row flex-col relative group">
		<div id="img">
			<img
				{alt}
				class="md:absolute md:inset-0 md:w-full h-full md:object-cover md:object-center"
				{src}
			/>
		</div>
		<div
			class="-mt-40 md:mt-0 transition w-full bg-white/0 hover:bg-white/70 hover:backdrop-blur-sm"
		>
			<div
				class="flex flex-row transition px-8 py-10 relative z-10 w-full bg-white/70 opacity-100 group-hover:bg-white/0"
			>
				<a rel="external" href={link}>
					<h1 class="tracking-widest text-lg title-font font-medium text-violet-500 mb-1">
						<div class="invisible group-hover:visible">
							<Launch32 />
						</div>
						{title}
					</h1>
				</a>
			</div>
			<div
				class="transition px-8 py-10 md-relative z-10 w-full md-opacity-0 group-hover:opacity-100"
			>
				<p class="leading-relaxed">{@html description}</p>
			</div>
		</div>
	</div>
</div>
