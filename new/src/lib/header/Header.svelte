<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/projects'}>
				<a sveltekit:prefetch href="/projects">Projects</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner socails">
		<div class="socail-link">
			<a href="https://linkedin.com/in/etinaude" target=”_blank”>
				<img src="https://res.cloudinary.com/etienne-naude/image/upload/v1601727581/icon/small/linkedinImg.svg">
				<div class="text">linkedin.com/in/etinaude</div>
			</a>
		</div>

		<div class="socail-link">
			<a href="https://linkedin.com/in/etinaude" target=”_blank”>
				<img src="https://res.cloudinary.com/etienne-naude/image/upload/v1601727581/icon/small/linkedinImg.svg">
				<div class="text">linkedin.com/in/etinaude</div>
			</a>
		</div>

		<div class="socail-link">
			<a href="https://linkedin.com/in/etinaude" target=”_blank”>
				<img src="https://res.cloudinary.com/etienne-naude/image/upload/v1601727581/icon/small/linkedinImg.svg">
				<div class="text">linkedin.com/in/etinaude</div>
			</a>
		</div>

		<div class="socail-link">
			<a href="https://linkedin.com/in/etinaude" target=”_blank”>
				<img src="https://res.cloudinary.com/etienne-naude/image/upload/v1601727581/icon/small/linkedinImg.svg">
				<div class="text">linkedin.com/in/etinaude</div>
			</a>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	.socails{
		display: flex;
		justify-content: space-between;
		width: min-content;
	}

	.socail-link{
		position: relative;
		margin: 10px;
	}

	.socail-link .text{
		position: absolute;
		top: 105%;
		left: 50%;
		transform: translateX(-50%);
		background: #222;

		align-items: center;
		justify-content: center;
		border-radius: 10px;
		max-height: 0px;
		padding: 0px;
		display: flex;
		overflow: hidden;
		transition: 0.2s ease;
	}

	.socail-link:hover .text{
		max-height: calc(1em + 15px);
		border: 2px solid #88ddff;
		padding: 5px;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: #333;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: #eee;

	}
	a:hover {
		color: var(--accent-color);
	}
</style>
