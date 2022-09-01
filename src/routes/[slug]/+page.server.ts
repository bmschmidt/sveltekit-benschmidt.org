import { error, redirect } from '@sveltejs/kit';
import { full_catalog } from '$lib/markdown/markdown';
export async function load({ params }) {
	const { pages } = await full_catalog(20);
	if (params.slug === 'maps-and-visualizations') {
		throw redirect(302, '/gallery');
	}
	console.log("-----", params.slug)
	console.log(pages.map(d => d.slug))
	console.log(pages.filter(d => d.slug === params.slug))
	return {
		document: pages.filter(d => d.slug === params.slug)[0]
	};
}
