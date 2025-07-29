<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import PageCard from '$lib/components/project/FeaturedProject.svelte';
	import { onMount } from 'svelte';
	import { swipe } from 'svelte-gestures';

	let slideIndex = 0;

	let interval: NodeJS.Timeout;
	let data: ProjectT[] = [];

	export let dataFunction: any;

	function swipeHandler(event: CustomEvent) {
		if (event.detail.direction === 'left') {
			gotoSlide(slideIndex + 1);
		} else if (event.detail.direction === 'right') {
			gotoSlide(slideIndex - 1);
		}
	}

	function gotoSlide(index: number) {
		slideIndex = (index + data.length) % data.length;

		clearInterval(interval);
		interval = setInterval(() => {
			slideIndex = (slideIndex + 1) % data.length;
		}, 10000);
	}

	onMount(async () => {
		data = await dataFunction();
		data = data.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
		gotoSlide(0);
	});
</script>

{#if data[slideIndex]}
	<div class="card-container" use:swipe on:swipe={swipeHandler}>
		<div class="slides" style="transform: translateX(-{slideIndex * 110}%)">
			{#each data as projectItem}
				<PageCard cardData={projectItem} />
			{/each}
		</div>

		{#if data.length > 1}
			<div class="index-dots">
				{#each data as _, i}
					<div
						class="dot"
						class:active={i === slideIndex}
						on:click={() => {
							slideIndex = i;
							gotoSlide(i);
						}}
					/>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	.card-container {
		height: 70vh;
		width: 85vw;

		display: flex;
		position: relative;
		left: 50%;
		translate: -50%;
		overflow: hidden;

		.slides {
			position: absolute;
			width: 99%;
			height: 100%;
			display: grid;
			grid-template-columns: repeat(4, 100%);
			transition: transform 1.5s ease;
			gap: 10%;
			left: 0;
		}
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

	.more-projects-btn {
		width: 90%;
		position: absolute;
		bottom: 70px;
		margin: auto;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (max-width: 768px) {
		.card-container {
			align-items: flex-start;
			margin-top: 10px;
			height: 90vh;
		}

		.tabs {
			height: 20px;
			bottom: 20px;
		}
	}
</style>
