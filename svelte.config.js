import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: 'warn',
			entries: [
				'/',
				'/etc/lazarsfeld',
				'/etc/friedrich',
				'/maps-and-visualizations',
				'/poli',
				'/poli/SOTU',
				'/lost',
				'/atom.xml',
				'/rss.xml'
			]
		}
	}
};

export default config;
