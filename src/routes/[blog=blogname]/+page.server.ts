import { full_catalog } from '$lib/markdown/markdown';

export async function load({ params }) {
	const catalog = await full_catalog()
	return {
		recent_posts: catalog[params.blog]
	};
}
