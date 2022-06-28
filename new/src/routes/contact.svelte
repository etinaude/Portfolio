<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>Socials</h1>

	<p>
		Email: <a href="mailto:eti@naude.dev">eti@naude.dev</a>
	</p>

	<p>
		Linked In: <a href="https://www.linkedin.com/in/etinaude/">linkedin.com/in/etinaude</a>
	</p>

	<p>
		Github: <a href="https://www.github.com/etinaude">github.com/etinaude</a>
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
