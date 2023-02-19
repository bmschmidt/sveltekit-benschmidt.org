export const prerender = true;

import { error, redirect } from '@sveltejs/kit';
import { full_catalog } from '$lib/markdown/markdown';

export async function load({ params }) {
	const { pages } = await full_catalog(20);
	if (params.slug === 'maps-and-visualizations') {
		throw redirect(302, '/gallery');
	}
	const document = pages.filter((d) => d.slug === params.slug);
	if (!document.length) {
		throw error(404, 'Page not found');
	}
	return {
		foo: 'bar',
		document: document[0]
	};
}
