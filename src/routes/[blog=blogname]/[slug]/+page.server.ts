import { full_catalog } from '$lib/markdown/markdown';
import { error, redirect } from '@sveltejs/kit';
export async function load({ params }) {
	const catalog = await full_catalog();
	const document = catalog[params.blog].filter((d) => d.slug == params.slug)[0];
	if (params.slug === '2023-01-07') {
		throw redirect(302, '/post/2023-01-07-AHA/');
	}

	if (!document) {
		console.warn(`LOST POST: ${params.slug}`);
		throw redirect(302, '/lost/');
	}
	return {
		document
	};
}
