<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import Device from 'svelte-device-info';

	export let cardData: ProjectT;
	export let index = -1;
	export let openIndex = -1;

	const videoTypesRegex = /(mp4)|(webm)|(mov)/;
	let hoverisVideo = false;
	let card: HTMLElement;

	onMount(() => {
		const mobile = Device.isMobile || Device.isTablet || Device.canHover === false;
		if (!mobile) VanillaTilt.init(card, { glare: true, max: 6, 'max-glare': 0.7 });

		if ((cardData.media[1] || '').match(videoTypesRegex)) hoverisVideo = true;
	});

	function open() {
		openIndex = -1;
		openIndex = index;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="outer tilt" on:click={open}>
	<div class="card tilt" bind:this={card}>
		<div class="img clickable">
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

		<h3>{cardData.title}</h3>

		<caption>{cardData.tldr || cardData.description}</caption>

		<div class="read-more clickable">
			read more
			<span class="material-symbol"> keyboard_double_arrow_right </span>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;
	.card {
		@include border;
		@include flex-center;

		text-align: center;
		flex-direction: column;
		width: 360px;
		overflow: hidden;
		padding-bottom: 20px;
		box-sizing: border-box;
		position: relative;

		a {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: 0;
		}

		.img {
			position: relative;
			width: 100%;
			aspect-ratio: 1;
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

	h3 {
		color: $accent;
		margin-bottom: 8px;
		margin-left: 10px;
		margin-right: 10px;
	}

	caption {
		padding: 0px 30px;
	}

	.read-more {
		@include read-more;
	}

	img,
	video {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		position: absolute;
		left: 0;
	}
</style>
