<script lang="ts">
	import { page } from '$app/stores';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<nav class="desktop-menu">
		<svg class="left-border" viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
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
		<svg class="right-border" viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

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
	@import './../../styles/root.scss';

	header {
		display: flex;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		background-image: linear-gradient($primary, $primary);
		z-index: 50;
	}

	a {
		@include flex-center;
		@include transition;

		transition: color 0.2s linear;
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
		top: 0;
		left: 50%;
		translate: -50%;

		a {
			height: 100%;
			padding: 0 1em;
			color: $accent-l;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: $light;
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			display: flex;
			list-style: none;
			background: $primary;

			li {
				position: relative;
				height: 100%;

				&.active::before {
					$size: 6px;
					content: '';
					position: absolute;
					left: calc(50% - $size);
					border: $size solid transparent;
					border-top: $size solid $accent;
				}
			}
		}
	}

	a:hover {
		color: $accent;
		scale: 1.1;
	}

	svg {
		height: 3em;
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
