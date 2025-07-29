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
	},

	compilerOptions: {
		warningFilter: (warning) => {
			// Return false to discard the warning, true to keep it
			const ignoreCodes = [
				'a11y_no_static_element_interactions',
				'a11y_click_events_have_key_events',
				'element_invalid_self_closing_tag',
				'css_unused_selector',
			];
			return !ignoreCodes.includes(warning.code);
		},
	},

	plugins: [ViteMinifyPlugin({}), optimizeCssModules(), VitePWA()]
};

export default config;
