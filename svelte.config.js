// import preprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json'
import adapter from '@sveltejs/adapter-netlify';
// import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: preprocess(
	// 	[importAssets()]
	// ),

	kit: {
		adapter: adapter(),
	},
	plugins: [
		json({
			compact: true
		})]
};

export default config;
