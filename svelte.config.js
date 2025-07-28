import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import { VitePWA } from 'vite-plugin-pwa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		paths: {
			// relative: false
		}
	},

	onwarn: (warning, handler) => {
		if (warning.code === 'css_unused_selector') return;
		if (warning.code === 'element_invalid_self_closing_tag') return;


		handler(warning);
	},

	plugins: [ViteMinifyPlugin({}), optimizeCssModules(), VitePWA()]
};

export default config;
