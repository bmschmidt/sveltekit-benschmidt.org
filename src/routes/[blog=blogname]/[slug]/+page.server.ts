import { full_catalog } from '$lib/markdown/markdown';
import { error, redirect } from '@sveltejs/kit';
export async function load({ params }) {
	const catalog = await full_catalog();
	const document = catalog[params.blog].filter(d => d.slug == params.slug)[0]
	if (!document) {
		console.warn(`LOST POST: ${params.slug}`);
		throw redirect(302, '/lost/');
	}
	return {
		document
	};
}
