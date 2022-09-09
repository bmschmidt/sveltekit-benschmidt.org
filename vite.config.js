import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import pandoc_plugin from './rollup-plugins/pandoc.js'
/* Custom rollup plugin loader for pandoc */

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [pandoc_plugin(), sveltekit()],
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		prerender: {
			default: true
		},
		appDir: 'internal' // For github pages: https://www.npmjs.com/package/@sveltejs/adapter-static/v/next
	}
};

export default config;
