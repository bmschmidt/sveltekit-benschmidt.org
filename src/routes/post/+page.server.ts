import { full_catalog } from '$lib/markdown/markdown';

export async function load() {
	const catalog = await full_catalog(20)
	return {
		recent_posts: catalog.posts,
    pages: catalog.pages
	};
}
