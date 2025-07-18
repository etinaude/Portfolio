import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_HOST } from './../keys.json';

export const load = async () => {
	if (browser) {
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: PUBLIC_POSTHOG_HOST,
			capture_pageview: true,
			capture_pageleave: true,
			capture_exceptions: true // This enables capturing exceptions using Error Tracking, set to false if you don't want this
		});
	}

	return;
};
