import { sveltekit } from '@sveltejs/kit/vite';
/* Custom rollup plugin loader for pandoc */
import { pandoc_rollup_plugin } from 'pandoc-tools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [pandoc_rollup_plugin({ cache_loc: 'posts_cache' }), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
