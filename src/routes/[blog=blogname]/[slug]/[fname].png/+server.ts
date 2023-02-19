import { promises as fs } from 'fs';
export const prerender = 'true';
import { error } from '@sveltejs/kit';

// Allow importing images straight from the folder of a blog post.

export async function GET({ url }) {
	return fs
		.stat(`src/content${url.pathname}`)
		.then(async () => {
			const file = await fs.readFile(`src/content${url.pathname}`, null);
			const response = new Response(file);
			response.headers.set('Content-Type', 'image/png');
			return response;
		})
		.catch(() => {
			throw new error(404, 'Image not found');
		});
}
