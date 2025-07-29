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
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	.full-page-card {
		display: flex;
		margin: 0 40px;
		height: 60vh;
		width: 100%;
		position: relative;
		flex-direction: row;
		justify-self: center;
		justify-content: space-between;

		.image {
			@include border;

			overflow: hidden;
			border-radius: 10px;
			max-height: 100%;
			position: relative;
			width: 60%;
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
			width: 35%;

			h3 {
				font-size: 1.5rem;
				font-weight: bold;
				margin-bottom: 2rem;
				margin-top: 0;
				color: $accent;
			}
		}

		.read-more {
			@include read-more;
			position: absolute;
			// bottom: 100px;
		}
	}

	@media (max-width: 768px) {
		.full-page-card {
			flex-direction: column;
			height: calc(100% - 80px);
			justify-content: space-between;

			.image {
				height: 40vh;
				width: 100%;
			}

			.description {
				margin-top: 20px;
				width: 100%;
				font-size: 0.9em;
				height: 50%;
			}

			.read-more {
				width: 85%;
			}
		}
	}
</style>
