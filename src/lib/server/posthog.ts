import posthog, { PostHog } from 'posthog-node';
import { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_HOST } from './../../keys.json';

let _client: PostHog | null = null;

export function getPostHogClient() {
	if (!_client) {
		_client = new posthog.PostHog(PUBLIC_POSTHOG_KEY, {
			host: PUBLIC_POSTHOG_HOST
		});
	}
	return _client;
}
