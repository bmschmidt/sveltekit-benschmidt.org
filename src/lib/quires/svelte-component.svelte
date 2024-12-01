<script lang="ts">
	import VoteHistory from '../../routes/(fullwidth)/poli/presidential-votes/VoteHistory.svelte';
	import { load } from 'js-yaml';
	const { quire } = $props();
	const lookups = {
		VoteHistory
	};
	type T = { name: keyof typeof lookups; args: Record<string, any> };
	const { name, args }: T = load(quire.content.text) as T;
	const Comp = lookups[name];
	// const component = lookups[]
</script>

<Comp {...args}></Comp>
