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
  // sort files by modification date
  const mdates = await Promise.all(files.map(async (f) => {
    const stats = await fs.stat('./' + f);
    return [stats.mtimeMs, f, await fulltext[f]().then(d => d.default)];
  }));
  mdates.sort((a, b) => b[0] - a[0]);
  const sorted_files = mdates.map(d => {return {filepath: d[1], data: d[2]}})
  let post_num = 0;
	for (const {filepath, data} of sorted_files) {
		const slug = path_to_slug(filepath);
    console.log(slug)
		const type = filepath.startsWith('/src/content/post/') ? 'post' : 'page';
    if (type === 'post') {
      // Only get the first n posts
      if (post_num++ > post_limit) {
        continue;
      }
    }
    const metadata = data.metadata;
  
		metadata.date = new Date(metadata.date || 0).toISOString();
		metadata.date = new Date(metadata.date || 0).toISOString();
		const url = `https://benschmidt.org/${slug}`;
		pages.push({
			url,
			slug,
			type,
			metadata,
			document: data.document
		});
	}
	pages.sort((a, b) => b.metadata.date - a.metadata.date);
	const posts = pages.filter((d) => d.type == 'post').map(cleanup_blogpost);
	const nonpost_page = pages.filter((d) => d.type == 'page');
	return { posts, pages: nonpost_page };
}
