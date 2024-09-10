import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
