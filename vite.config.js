import { sveltekit } from '@sveltejs/kit/vite';
/* Custom rollup plugin loader for pandoc */
//import { pandoc_rollup_plugin } from 'pandoc-tools';
import { quire_plugin } from 'quires/lib';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [quire_plugin({pandoc: false}), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
