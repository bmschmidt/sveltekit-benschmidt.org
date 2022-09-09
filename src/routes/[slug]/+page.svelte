<script>
	export let data;
	import { Document } from 'pandoc-svelte-components';

	if (!data.document) {
		throw new Error("No document found");
	}
</script>
<div class="flex flex-row relative mt-36 md:mt-36 ml-5">
	<div class="basis-1/6 md:basis-1/4" />
	<div class="w-full md:w-1/2">
		<div class="prose prose-stone prose-l">
			<Document ast={data.document.document} settings={{}} />
		</div>		
	</div>
	<div class="basis-1/6 md:basis-1/4" />
</div>
