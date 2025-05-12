<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { swipe } from 'svelte-gestures';

	const videoTypesRegex = /(mp4)|(webm)|(mov)/;

	export let cardData: ProjectT;
	let slideIndex = 0;
	let initTime = Date.now();
	let interval: NodeJS.Timeout;
	let mediaList: { type: 'video' | 'image'; url: string | undefined }[] = [];

	let unique = {};
	function reload() {
		unique = {};
	}

	function left() {
		if (slideIndex <= 0) slideIndex = mediaList.length;
		slideIndex--;
		resetTime();
		reload();
	}

	function right() {
		if (slideIndex >= mediaList.length - 1) slideIndex = -1;
		slideIndex++;
		resetTime();
		reload();
	}

	function autoSlide() {
		if (cardData.media.length > 1) {
			const deltaTime = Date.now() - initTime;
			if (deltaTime >= 5000) {
				initTime = Date.now();
				right();
			}
		}
	}

	function swipeHandler(event: CustomEvent) {
		if (mediaList.length === 1) return;

		if (event.detail.direction === 'left') {
			right();
		} else if (event.detail.direction === 'right') {
			left();
		}
	}

	// TODO
	const resetTime = () => {
		initTime = Date.now();
	};

	onDestroy(() => {
		clearInterval(interval);
	});

	onMount(() => {
		clearInterval(interval);

		mediaList = [];

		if (cardData.media && cardData.media.length > 0) {
			for (let item of cardData.media) {
				if (item.match(videoTypesRegex)) {
					mediaList.push({ type: 'video', url: item });
				} else {
					mediaList.push({ type: 'image', url: item });
				}
			}
		}

		mediaList = mediaList.filter((item) => item.url);

		if (mediaList.length == 1) return;
		interval = setInterval(autoSlide, 100);
	});
</script>

{#if cardData}
	<div class="slides">
		<div
			class="image-cont"
			use:swipe={{ timeframe: 300, minSwipeDistance: 100 }}
			on:swipe={swipeHandler}
		>
			{#if mediaList[slideIndex]}
				{#key unique}
					<div transition:fade={{ duration: 200 }}>
						{#if mediaList[slideIndex].type === 'image'}
							<img src={mediaList[slideIndex].url} alt={cardData.title} />
						{:else}
							<video playsinline autoplay muted loop class="hover-img">
								<source src={mediaList[slideIndex].url} />
							</video>
						{/if}
					</div>
				{/key}
			{/if}
		</div>

		{#if mediaList.length > 1}
			<div class="index-dots">
				{#each mediaList as _, i}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
					<div
						class="dot"
						class:active={i === slideIndex}
						on:click={() => {
							slideIndex = i;
							reload();
						}}
					/>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	img,
	video {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		object-position: center;
		left: 0;
	}

	.slides {
		position: relative;
		width: 400px;
		height: 400px;
		display: flex;
		margin-right: 40px;
		overflow: hidden;

		.index-dots {
			position: absolute;
			bottom: 0px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			gap: 5px;

			.dot {
				width: 25px;
				height: 8px;
				border-radius: 50px;
				background-color: $primary-xxl;
				// border: 2px solid $accent;
				cursor: pointer;

				&.active {
					opacity: 1;
					background-color: $accent;
				}
			}
		}
	}

	.image-cont {
		width: 100%;
		height: calc(100% - 20px);
		display: flex;
		flex-direction: row;
		border-radius: 10px;
		overflow: hidden;
		// border: 2px solid $accent;
		box-sizing: border-box;
		position: relative;
	}

	.btn {
		position: absolute;
		bottom: -2px;

		background-color: $primary;
		font-size: 1.2em;
		padding: 8px 15px 3px 15px;
		border-radius: 10px;
		z-index: 1000;
		user-select: none;
		transform-origin: center bottom;
		border: 2px solid $accent;
		color: $accent;
		border-bottom: none;

		&:hover {
			scale: 1.05;
		}

		&.left {
			left: -2px;
			border-radius: 0px 20px 0px 0px;
			border-left: none;
		}

		&.right {
			right: -2px;
			border-radius: 20px 0px 0px 0px;
			border-right: none;
		}
	}

	@media (max-width: 768px) {
		.image-cont,
		.image-cont div,
		img {
			width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
		}

		.btn {
			scale: 0.7 !important;
		}

		.slides {
			width: 85vw;
			height: 85vw;
			margin-right: 0;
		}
	}
</style>
