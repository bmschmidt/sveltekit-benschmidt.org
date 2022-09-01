import { promises as fs } from 'fs';

async function get_posts() {
	let queue = ['src/content'];
	const posts = [];
	while (queue.length > 0) {
		const f = queue.pop();
		try {
			let children = await fs.readdir(f);
			children = children.map((d) => `${f}/${d}`);
			queue = [...queue, ...children];
		} catch (err) {
			//
		}
		if (f.endsWith('.md')) {
			posts.push(f);
		}
	}
	return posts;
}

export async function get() {
	const posts = await get_posts();
	return {
		body: {
			posts
		}
	};
}
