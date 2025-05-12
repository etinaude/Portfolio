<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let isMenuOpen = false;

	let homeLink = {
		text: 'Home',
		url: '/'
	};
	let projectsLink = {
		text: 'Projects',
		url: '/projects'
	};
	let contactLink = {
		text: 'Contact',
		url: '/contact'
	};

	let leftLink = homeLink;
	let rightLink = contactLink;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		let url = $page.url.pathname;

		if (url === '/') {
			leftLink = projectsLink;
			rightLink = contactLink;
		} else if (url.includes('projects')) {
			leftLink = homeLink;
			rightLink = contactLink;
		} else if (url.includes('contact')) {
			leftLink = homeLink;
			rightLink = projectsLink;
		}

		// get tags from url
		const urlParams = new URLSearchParams(window.location.search);
		let tag = urlParams.get('tag') || '';

		if (tag) {
			homeLink.url = `/?tag=${tag}`;
			projectsLink.url = `/projects?tag=${tag}`;
			contactLink.url = `/contact?tag=${tag}`;
		}
	});
</script>

<header>
	<nav class="desktop-menu">
		<div class="left side">
			<div class="text">
				<a class="clickable" href={leftLink.url}>{leftLink.text}</a>
			</div>
			<svg class="right-border" viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</div>

		<div class="right side">
			<svg class="left-border" viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
			<div class="text">
				<a class="clickable" href={rightLink.url}>{rightLink.text}</a>
			</div>
		</div>
	</nav>

	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<nav class="mobile-menu" on:click={toggleMenu}>
		<div>☰</div>
		<ul class={isMenuOpen ? 'open' : 'close'}>
			<li class:active={$page.url.pathname === '/'}>
				<a class="clickable" href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/projects'}>
				<a class="clickable" href="/projects">Projects</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a class="clickable" href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		z-index: 50;
		top: 0;
		filter: drop-shadow(0px 3px 0px #111);
	}

	a {
		@include flex-center;
		@include transition;
		cursor: none;

		transition: color 0.4s linear;
		height: 100%;
	}

	.right-border {
		translate: -1px;
	}

	.left-border {
		translate: 1px;
	}

	.desktop-menu {
		display: flex;
		position: absolute;

		a {
			height: 100%;
			padding: 0 1em;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: $light;
		}

		.side {
			position: fixed;
			display: flex;
			align-items: center;
			height: 3em;

			.text {
				background-color: $primary;
				height: 100%;
			}

			&:hover {
				scale: 1.05;
				filter: drop-shadow(0px 3px 0px $accent);
			}

			&.left {
				left: 0;
				transform-origin: top left;
			}

			&.right {
				right: 0;
				transform-origin: top right;
			}
		}
	}

	a:hover {
		color: $accent;
		scale: 1.1;
	}

	svg {
		height: 100%;
		display: block;

		path {
			fill: $primary;
		}
	}

	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}
	}

	@media (min-width: 769px) {
		.mobile-menu {
			display: none;
		}
	}

	.mobile-menu {
		background-color: transparent;
		position: fixed;
		top: 30px;
		left: 30px;
		font-size: xx-large;
		z-index: 100;
		line-height: 0;

		ul {
			position: fixed;
			padding: 0;
			padding-top: 100px;
			margin: 0;
			top: 0;
			left: 0;
			display: flex;
			flex-direction: column;
			list-style: none;
			height: 100vh;
			background-color: $primary-tt;
			backdrop-filter: blur(2px);
			z-index: -1;
			overflow: hidden;
			transition: width 0.5s ease-in-out;

			li {
				position: relative;
				height: 90px;
				list-style: none;
				text-align: left;

				&.active::before {
					$size: 10px;
					content: '';
					position: absolute;
					left: 80px;
					top: 40%;
					border: $size solid transparent;
					border-left: $size solid $accent;
				}
			}

			&.open {
				width: min(100vw, 500px);
			}

			&.close {
				width: 0;
			}
		}
	}
</style>
