<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { swipe } from 'svelte-gestures';

	const videoTypes = ['mp4', 'webm', 'ogg', 'mov'];

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
		if (cardData.hoverImg || cardData.hoverVideo) {
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
		mediaList = mediaList.concat([
			{ type: 'image', url: cardData.imageUrl },
			{ type: 'image', url: cardData.hoverImg },
			{ type: 'video', url: cardData.hoverVideo }
		]);

		if (cardData.media && cardData.media.length > 0) {
			for (let item of cardData.media) {
				const type = item.split('.').pop();
				if (!type) continue;

				if (videoTypes.includes(type)) {
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
	<div
		class="image-cont"
		use:swipe={{ timeframe: 300, minSwipeDistance: 100 }}
		on:swipe={swipeHandler}
	>
		{#if mediaList.length > 1}
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div class="right btn" on:click={right}>
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div class="left btn" on:click={left}>
				<span class="material-symbol"> keyboard_double_arrow_left </span>
			</div>
		{/if}

		<div class="view">
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
		bottom: 10px;

		background-color: $primary-tt;
		font-size: 1.2em;
		padding: 10px 30px;
		border-radius: 10px;
		cursor: pointer;
		z-index: 1000;
		user-select: none;
		scale: 0;
		transform-origin: center bottom;
		border: 2px solid $accent;
		color: $accent;

		&.left {
			left: 7px;
		}

		&.right {
			right: 7px;
		}
	}

	@media (max-width: 768px) {
		.image-cont {
			width: 85vw;
			margin-right: 0;
			margin-bottom: 10px;
		}

		.btn {
			scale: 0.7 !important;
		}
	}
</style>
