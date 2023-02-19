export const prerender = true;

import { full_catalog } from '$lib/markdown/markdown';

export async function load() {
	const catalog = full_catalog();
	const document = catalog.pages.filter((d) => d.slug == '')[0];
	return {
		document: document.document,
		recent_posts: catalog.post.slice(0, 12),
		pages: catalog.pages
	};
}
