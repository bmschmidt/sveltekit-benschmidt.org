<script>
	export let data;
	import { Document } from 'pandoc-svelte-components';

  console.log({d: data.document})
</script>

<div class="prose prose-stone prose-l">
	<Document ast={data.document.document} />
</div>
