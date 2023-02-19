import { full_catalog } from '$lib/markdown/markdown';

export async function load({ params }) {
	const catalog = await full_catalog();
	console.log(catalog[params.blog]);
	return {
		recent_posts: catalog[params.blog]
	};
}
