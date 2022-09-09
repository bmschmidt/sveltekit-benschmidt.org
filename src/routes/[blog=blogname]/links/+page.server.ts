import { promises as fs } from 'fs';

async function get_posts() {
	let queue = ['src/content/post'];
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
			let slug = f.replace(/.md$/, '')
			if (slug.endsWith('index')) {
				slug = slug.replace(/index$/, '');
			}
			posts.push(slug.replace("src/content/", ""));
		}
	}
	return posts;
}

export async function load() {
	const posts = await get_posts();
	return {
			posts
	};
}
