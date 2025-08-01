<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Cursor from '$lib/components/layout/Cursor.svelte';
	import Splash from '$lib/components/layout/Splash.svelte';

	import './app.scss';
	import type { posT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { initAnalytics } from '$lib/services/firebase';
	import { onNavigate, beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	let pos: posT = { x: 0, y: 0, clickable: false };

	onMount(async () => {
		initAnalytics();
	});

	// PostHog pageleave & pageview tracking
	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	function mouseMove(event: any) {
		pos.x = event.x;
		pos.y = event.y;

		for (const el of event.composedPath()) {
			if (el.classList?.contains('clickable')) {
				pos.clickable = true;
				return;
			}
		}
		pos.clickable = false;
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main on:mousemove={mouseMove}>
	<slot />

	<Cursor {pos} />
	<Splash />
</main>

<style>
	@keyframes -global-from-bottom {
		0% {
			transform: rotateY(-20deg) translateY(80vw) skewY(20deg);
		}
		100% {
			transform: none;
		}
	}

	@keyframes -global-from-left {
		0% {
			transform: rotateX(30deg) translateX(-150vw) skewX(-30deg);
		}
		100% {
			transform: none;
		}
	}

	@keyframes -global-from-right {
		0% {
			transform: rotateX(-30deg) translateX(150vw) skewX(30deg);
		}
		100% {
			transform: none;
		}
	}

	* {
		cursor: none;
	}
</style>
