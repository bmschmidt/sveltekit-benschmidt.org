import { promises as fs } from 'fs';
export const prerender = true;

// Allow importing images straight from the folder of a blog post.

export async function GET({ url }) {
	const file = await fs.readFile(`src/content${url.pathname}`, null);
	const response = new Response(file);
	response.headers.set('Content-Type', 'image/png');
	return response;
}
