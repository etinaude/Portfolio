<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';

	export let cardData: ProjectT;
	let image: HTMLElement;
	let slideIndex = 0;
	const imageWidth = 400;
	let initTime = Date.now();
	let interval: NodeJS.Timeout;
	const maxSlides = cardData.hoverImg || cardData.hoverVideo ? 1 : 0;

	function left() {
		resetTime();
		if (slideIndex <= 0) slideIndex = maxSlides + 1;

		slideIndex--;
		image.style.transform = `translateX(${imageWidth * -slideIndex}px)`;
	}

	function right() {
		resetTime();
		if (slideIndex >= maxSlides) slideIndex = -1;

		slideIndex++;
		image.style.transform = `translateX(${imageWidth * -slideIndex}px)`;
	}

	function autoSlide() {
		if (cardData.hoverImg || cardData.hoverVideo) {
			const deltaTime = Date.now() - initTime;
			if (deltaTime >= 5000) {
				initTime = Date.now();
				right();
			}
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

		if (maxSlides == 0) return;
		interval = setInterval(autoSlide, 100);
	});
</script>

{#if cardData}
	<div class="image-cont">
		{#if cardData.hoverImg || cardData.hoverVideo}
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div class="left btn" on:click={left}>
				<span class="material-symbol"> keyboard_double_arrow_left </span>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div class="right btn" on:click={right}>
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</div>
		{/if}

		<div class="view" bind:this={image}>
			<img src={cardData.imageUrl} alt={cardData.title} />

			{#if cardData.hoverImg}
				<img class="hover-img" src={cardData.hoverImg} alt="project hover" />
			{:else if cardData.hoverVideo}
				<video playsinline autoplay muted loop class="hover-img">
					<source src={cardData.hoverVideo} />
				</video>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../styles/root.scss';

	img,
	video {
		width: 400px;
		height: 400px;
		aspect-ratio: 1;
		object-fit: cover;
		left: 0;
	}

	.view {
		display: flex;
		flex-direction: row;
	}

	.image-cont {
		position: relative;
		width: 400px;
		height: 400px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		border-radius: 10px;
		margin-right: 40px;

		&:hover .btn {
			scale: 1;
		}
	}

	.btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: $primary-t;
		color: white;
		font-size: 1.2em;
		padding: 10px;
		border-radius: 10px;
		cursor: pointer;
		z-index: 1000;
		user-select: none;
		scale: 0;

		&.left {
			left: 0;
			transform-origin: top left;
		}

		&.right {
			right: 0;
			transform-origin: top right;
		}

		&:hover {
			scale: 1.05;
		}
	}

	@media (max-width: 600px) {
		.image-cont {
			width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
		}
	}
</style>
