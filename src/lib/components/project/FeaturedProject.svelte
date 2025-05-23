<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import Device from 'svelte-device-info';
	import { fade } from 'svelte/transition';

	const videoTypesRegex = /(mp4)|(webm)|(mov)/;
	let hoverisVideo = false;

	export let cardData: ProjectT;
	var card: HTMLElement;

	onMount(() => {
		const mobile = Device.isMobile || Device.isTablet || Device.canHover === false;
		if (!mobile) VanillaTilt.init(card, { glare: true, max: 6, 'max-glare': 0.7 });
		if (cardData.media.length > 1) updateImages(cardData.media[1]);
	});

	export function updateImages(url: string) {
		hoverisVideo = Boolean(url.match(videoTypesRegex));
	}
</script>

{#key cardData}
	<div class="full-page-card" transition:fade={{ duration: 500 }}>
		<div class="image">
			<img src={cardData.media[0]} alt={cardData.title} />

			{#if cardData.media.length > 1}
				{#if hoverisVideo}
					<video playsinline autoplay muted loop class="hover-img">
						<source src={cardData.media[1]} />
					</video>
				{:else}
					<img class="hover-img" src={cardData.media[1]} alt="project hover" />
				{/if}
			{/if}
		</div>

		<div class="description">
			<h3>
				{cardData.title}
			</h3>

			{cardData.description || cardData.tldr}

			<br />
			<br />

			<a
				class="read-more clickable"
				href={cardData.followUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				read more
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</a>
		</div>
	</div>
{/key}

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.full-page-card {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 6rem;
		padding: 1rem;
		width: 80vw;
		position: absolute;

		.image {
			@include border;

			overflow: hidden;
			border-radius: 10px;
			max-height: 60vh;
			position: relative;
			width: 100%;
			aspect-ratio: 1;

			img,
			video {
				height: 100%;
				width: 100%;
				aspect-ratio: 1;
				object-fit: cover;
				position: absolute;
				left: 0;
			}

			.hover-img {
				display: none;
			}

			&:hover {
				.hover-img {
					display: block;
				}
			}
		}

		.description {
			position: relative;
			font-size: 1rem;
			margin-top: 1rem;

			h3 {
				font-size: 1.5rem;
				font-weight: bold;
				margin-bottom: 2rem;
				color: $accent;
			}
		}

		.read-more {
			@include read-more;
		}
	}

	@media (max-width: 768px) {
		.full-page-card {
			grid-template-columns: 1fr;
			grid-gap: 1rem;
			width: 90vw;
			height: 70vh;
			grid-template-rows: 1fr 2fr;

			.image {
				height: 100%;
			}

			.description {
				margin-top: 0rem;
			}

			.read-more {
				width: 90%;
			}
		}
	}
</style>
