<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import PageCard from './FeaturedProject.svelte';
	import { onMount } from 'svelte';
	import { swipe } from 'svelte-gestures';

	const SLIDE_DURATION = 3;
	const LONG_SLIDE_DURATION = 6;

	let slideIndex = 0;
	let currentData: ProjectT;
	let card: any;

	let interval: NodeJS.Timeout;
	let data: ProjectT[] = [];

	export let dataFunction: any;

	function nextSlide() {
		gotoSlide((slideIndex + 1) % data.length);
	}

	function prevSlide() {
		gotoSlide((slideIndex - 1 + data.length) % data.length);
	}

	function gotoSlide(index: number, timeOut = SLIDE_DURATION) {
		slideIndex = index;
		currentData = JSON.parse(JSON.stringify(data[slideIndex]));

		if (card) {
			card.updateImages(currentData.media[1]);
		}
		clearInterval(interval);
		interval = setInterval(() => {
			nextSlide();
		}, timeOut * 1000);
	}

	function swipeHandler(event: CustomEvent) {
		if (event.detail.direction === 'left') {
			nextSlide();
		} else if (event.detail.direction === 'right') {
			prevSlide();
		}
	}

	onMount(async () => {
		data = await dataFunction();
		data = data.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
		gotoSlide(0);
	});
</script>

<Saos animation={'from-bottom 1s ease'}>
	{#if currentData}
		<div
			class="card-container"
			on:swipe={swipeHandler}
			use:swipe={{ timeframe: 300, minSwipeDistance: 100 }}
		>
			<PageCard cardData={currentData} bind:this={card} />

			{#if data.length > 1}
				<div class="index-dots">
					{#each data as _, i}
						<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
						<div
							class="dot"
							class:active={i === slideIndex}
							on:click={() => {
								slideIndex = i;
								gotoSlide(i, LONG_SLIDE_DURATION);
							}}
						/>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</Saos>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.component {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.card-container {
		height: 80vh;

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.index-dots {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 5px;

		.dot {
			transition: 0.5s ease;
			width: 50px;
			height: 16px;
			border-radius: 50px;
			background-color: $primary-xxl;
			cursor: pointer;

			&.active {
				width: 50px;

				opacity: 1;
				background-color: $accent;
			}
		}
	}

	@media (max-width: 768px) {
		.card-container {
			align-items: flex-start;
			margin-top: 10px;
		}

		.tabs {
			height: 20px;
			bottom: 20px;
		}
	}
</style>
