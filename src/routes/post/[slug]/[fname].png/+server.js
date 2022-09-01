import { promises as fs } from 'fs';

// Allow importing images straight from the folder of a blog post.

export async function GET({ url, params }) {
	const file = await fs.readFile(`src/content${url.pathname}`, null);
	return {
		status: 200,
		headers: {
			//      'Content-disposition': `attachment; filename=${file.name}`,
			'Content-type': 'image/png'
		},
		body: new Uint8Array(file)
	};
}
