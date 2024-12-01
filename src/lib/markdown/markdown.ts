import { blogs } from '$lib/../params/blogname';
const fulltext = import.meta.glob('/src/content/**/*.djot', { eager: true });

function path_to_slug(filepath: string) {
	const path = filepath.replace('/src/content/', '');
	if (filepath === '/src/content/index.djot') {
		return '';
	}
	let slug;
	if (path.endsWith('index.djot')) {
		const p = path.split('/');
		p.pop();
		slug = p.pop();
	} else {
		slug = path.split('/').pop().replace('.djot', '');
	}
	return slug;
}

function cleanup_blogpost(page) {
	if (isNaN(new Date(page.metadata.date))) {
		throw new Error(`Invalid date for ${page.metadata}`);
	}
	page.metadata.tags = page.metadata.tags || [];
	if (typeof page.metadata.tags === 'string') {
		page.metadata.tags = page.metadata.tags.split(',');
	}
	page.metadata.tags = page.metadata.tags.map((d) => d.trim()).filter((d) => d.length > 0);
	if (page.metadata.categories) {
		page.metadata.tags = [...new Set([...page.metadata.tags, ...page.metadata.categories])];
	}
	return page;
}

export function full_catalog(post_limit = 1e6) {
	const pages = [];
	const files = Object.keys(fulltext);
	for (const filepath of files) {
		const data = fulltext[filepath].default;
		// console.log({data})
		const slug = path_to_slug(filepath);
		let type = 'page';
		for (const blog of blogs) {
			if (filepath.startsWith(`/src/content/${blog}/`)) {
				type = blog;
			}
		}
		const metadata = data.metadata || {};
		if (metadata.date === undefined || metadata.date == 0) {
			console.warn({metadata})
			console.warn('No date for', slug);
		}
		metadata.date = new Date(metadata.date || 0).toISOString();
		metadata.date = new Date(metadata.date || 0).toISOString();
		let url = '';
		if (blogs.includes(type)) {
			url = `https://benschmidt.org/${type}/${slug}`;
		} else {
			url = `https://benschmidt.org/${slug}`;
		}
		pages.push({
			url,
			slug,
			type,
			metadata,
			document: data
		});
	}
	pages.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
	const returnable = {
		pages: pages.filter((d) => d.type == 'page')
	};
	for (const blog of blogs) {
		returnable[blog] = pages.filter((d) => d.type == blog).map(cleanup_blogpost);
	}
	return returnable;
}
