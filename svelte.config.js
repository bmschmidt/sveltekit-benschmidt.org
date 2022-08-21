import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
//import md from 'vite-plugin-markdown'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		trailingSlash: 'always', // ugh, but seems maybe necessary?
		vite: {
//			 plugins: [ md.plugin({mode: 'html'}) ],			
			 allow: ['..'] //
			},
		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;
