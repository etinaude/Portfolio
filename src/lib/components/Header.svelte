<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
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

	<div class="corner socials">
		<svg class="left-border" viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<div class="nav-links">
			<ul class="social-links-group">
				<li class="social-link">
					<!-- svelte-ignore security-anchor-rel-noreferrer -->
					<a
						class="clickable"
						href="https://linkedin.com/in/etinaude"
						target="_blank"
						rel="noopener"
					>
						<img alt="linked in logo" src="linkedin_logo.svg" />
					</a>
				</li>

				<li class="social-link">
					<a class="clickable" href="mailto:eti@naude.dev" target="_blank" rel="noopener">
						<img alt="email icon" src="mail_logo.svg" />
					</a>
				</li>

				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<li class="social-link">
					<a class="clickable" href="https://github.com/etinaude" target="_blank" rel="noopener">
						<img alt="github logo" src="github_logo.svg" />
					</a>
				</li>

				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<li class="social-link">
					<a
						class="clickable"
						href="https://www.instagram.com/etinaude/"
						target="_blank"
						rel="noopener"
					>
						<img alt="insta logo" src="insta_logo.svg" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<style lang="scss">
	@import '../styles/root.scss';

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

	.corner {
		img {
			height: 1.5em;
		}
	}

	.socials {
		display: flex;
		position: fixed;
		right: 0;

		width: max-content;
		.social-links-group {
			display: flex;
			background: $primary;
			height: 100%;

			justify-content: space-between;
			width: max-content;
			.social-link {
				position: relative;
				margin: 0 10px;
				&:hover {
					scale: 1.1;
				}
			}
		}
	}

	nav {
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
		nav {
			left: 0;
			translate: none;
		}
		.socials {
			display: none;
		}

		.left-border {
			display: none;
		}
	}
</style>
