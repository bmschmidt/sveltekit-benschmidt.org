export const prerender = true

import { full_catalog } from '$lib/markdown/markdown';
export async function load() {
  const catalog = await full_catalog();
	const document = catalog.pages.filter(d => d.slug == '')[0]
	return {
		document : document.document,
		recent_posts: catalog.post.slice(0, 10),
    pages: catalog.pages
	};
}