import { full_catalog } from '$lib/markdown/markdown';
import { error } from '@sveltejs/kit';
export async function load({ params }) {
	const catalog = await full_catalog();
	console.log(decodeURIComponent(params.tag));
	const posts = catalog[params.blog].filter((d) => d.metadata.tags?.includes(params.tag));
	if (!posts) {
		throw error(404, 'Page not found');
	}
	return {
		posts
	};
}
