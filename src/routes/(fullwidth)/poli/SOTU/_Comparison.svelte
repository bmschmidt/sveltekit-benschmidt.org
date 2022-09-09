<script>
	export let row;
	$: text = '';
	$: {
		text = row['nc:text'];
		for (let word of row['words']) {
			text = text.replaceAll(new RegExp('\\b' + word + '\\b', 'g'), '<<<<' + word + '>>>>');
		}
		text = text.replaceAll('<<<<', '<span style="background-color:lightblue">');
		text = text.replaceAll('>>>>', '</span>');
	}
</script>

<div class="m-1 p-3 shadow-xl">
	<span class="text-bold">{row['president']}</span>, <code>{row['@id']}</code>
	{Math.floor(row['cosine_sim'] * 100)}% similarity
	<div class="h-1 bg-blue-500" style="width:{Math.floor(row['cosine_sim'] * 100)}%" />
	{@html text}
</div>
