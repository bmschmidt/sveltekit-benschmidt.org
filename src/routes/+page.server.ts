import { full_catalog } from '$lib/markdown/markdown';
import { run_pandoc } from '$lib/markdown/pandoc';

export async function load() {
	const text = await run_pandoc('index');
  const catalog = await full_catalog();
	return {
		document: text,
		recent_posts: catalog.posts,
    pages: catalog.pages
	};
}