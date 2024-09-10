export const prerender = true;

import { full_catalog } from '$lib/markdown/markdown';
// import { json2html } from '$lib/markdown/obsolete_pandoc';
import { Feed } from 'feed';
async function make_feed() {
	const feed = new Feed({
		title: "Ben Schmidt's Blog",
		description: 'Posts and updates. Fun with a porpoise.',
		id: 'https://benschmidt.org/',
		link: 'https://benschmidt.org/post',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		copyright: 'All rights reserved 2023, Ben Schmidt',
		//  generator: "awesome", // optional, default = 'Feed for Node.js'
		feedLinks: {
			//			json: 'https://benschmidt.org/feed.json',
			atom: 'https://benschmidt.org/feed.xml'
		},
		author: {
			name: 'Ben Schmidt',
			email: 'bmschmidt@gmail.com',
			link: 'https://benschmidt.org'
		}
	});
	let post_index_raw = await full_catalog();
	let post_index = post_index_raw.post;
	post_index.sort((a, b) => b.metadata.date - a.metadata.date);
	post_index = post_index.filter((d) => d.metadata.date).filter((d) => !d.metadata.draft);

	for (const post of post_index) {
		post.html = await json2html(post.document);
	}

	post_index.forEach((post_full) => {
		const post = post_full.metadata;
		post.url = post_full.url as string;
		feed.addItem({
			title: post.title,
			id: post.url,
			link: post.url,
			description: post_full.description || '',
			content: post_full.html,
			author: [
				{
					name: 'Ben Schmidt',
					email: 'bmschmidt@gmail.com',
					link: 'https://benschmidt.org'
				}
			],
			date: new Date(post.date)
			//			image: post.image
		});
	});

	feed.addCategory('History');
	feed.addCategory('Programming');
	feed.addCategory('Digital Humanities');
	feed.addCategory('Data Analysis');
	feed.addCategory('Data Visualization');
	return feed;
}

export async function GET({ params }) {
	const format = params.format;
	const feed = await make_feed();
	let feed_format = '';
	if (format === 'atom' || format === 'feed') {
		feed_format = feed.atom1();
	} else if (format == 'rss') {
		feed_format = feed.rss2();
	} else {
		throw new Error('Not found');
	}
	const response = new Response(feed_format, {
		headers: {
			'Content-type': 'text/xml'
		}
	});
	return response;
}
