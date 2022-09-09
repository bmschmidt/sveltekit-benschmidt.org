import { run_pandoc } from '$lib/markdown/pandoc';
export const prerender = true

export async function GET({ params }) {
	const slug = params.slug;
	const data = await run_pandoc(slug);
	const r = new Response(JSON.stringify(data));
	r.headers.set('Content-Type', 'application/json');
	return r;
}
