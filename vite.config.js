import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { json_with_meta } from './src/lib/markdown/pandoc.ts';

/* Custom rollup plugin loader for pandoc */
const fileRegex = /\.md$/
function pandoc_plugin() {
  return {
    name: 'pandoc',
    async transform(src, id) {
      if (fileRegex.test(id)) {
        const data = await json_with_meta(id)
        return {
          code: `export default ${JSON.stringify(data)};`,
          map: { mappings: '' }
        }
      }
    }
  }
}

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
