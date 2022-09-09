// import { json_with_meta } from '$lib/markdown/pandoc';
import { promises as fs } from 'fs';
const fulltext = import.meta.glob('/src/content/**/*.md');

function path_to_slug(filepath) {
	const path = filepath.replace('/src/content/', '');
  if (filepath === '/src/content/index.md') {
    return '';
  }
	let slug;
	if (path.endsWith('index.md')) {
		const p = path.split('/');
		p.pop();
		slug = p.pop();
	} else {
		slug = path.split('/').pop().replace('.md', '');
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


export async function full_catalog(post_limit = 1e6) {
	const pages = [];
  const files = Object.keys(fulltext);
  let post_num = 0;
	for (const filepath of files) {
		const data = (await fulltext[filepath]()).default;
		const slug = path_to_slug(filepath);
		let type = 'page';
		if (filepath.startsWith('/src/content/post/')) {
			type = 'post';
		}
		if (filepath.startsWith('/src/content/sappingattention/')) {
			type = 'sappingattention';
		}
    const metadata = data.metadata || {};
		if (metadata.date === undefined || metadata.date == 0) {
			console.warn("No date for", slug);
		}
		metadata.date = new Date(metadata.date || 0).toISOString();
		metadata.date = new Date(metadata.date || 0).toISOString();
		let url : string = '';
		if (type === 'post') {
			url = `https://benschmidt.org/post/${slug}`;
		} else if (type === 'sappingattention') {
			url = `https://benschmidt.org/sappingattention/${slug}`;
		} else {
			url = `https://benschmidt.org/${slug}`;
		}
		pages.push({
			url,
			slug,
			type,
			metadata,
			document: data.document
		});
	}
	pages.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
	const post = pages.filter((d) => d.type == 'post').map(cleanup_blogpost);
	const sappingattention = pages.filter((d) => d.type == 'sappingattention').map(cleanup_blogpost);
	const nonpost_page = pages.filter((d) => d.type == 'page');
	return { post, sappingattention, pages: nonpost_page };
}
