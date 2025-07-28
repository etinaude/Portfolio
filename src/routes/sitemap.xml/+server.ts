import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: 'https://etinaude.dev',
		excludeRoutePatterns: ['admin', 'projects/*', 'contacts'],
		defaultChangefreq: 'weekly',
		defaultPriority: 0.7
	});
};
