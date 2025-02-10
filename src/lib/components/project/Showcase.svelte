<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import PageCard from './PageCard.svelte';
	import { onMount } from 'svelte';

	const SLIDE_DURATION = 3;
	const LONG_SLIDE_DURATION = 6;

	let slideIndex = 0;
	let currentData: ProjectT;

	let interval: NodeJS.Timeout;

	let data: ProjectT[] = [];

	export let dataFunction: any;

	function nextSlide() {
		gotoSlide((slideIndex + 1) % data.length);
	}

	function gotoSlide(index: number, timeOut = SLIDE_DURATION) {
		slideIndex = index;
		currentData = JSON.parse(JSON.stringify(data[slideIndex]));
		clearInterval(interval);
		interval = setInterval(() => {
			nextSlide();
		}, timeOut * 1000);
	}

	onMount(async () => {
		data = await dataFunction();
		data = data.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
		currentData = data[slideIndex];
		gotoSlide(0);
	});
</script>

<Saos animation={'from-bottom 1s ease'}>
	{#if currentData}
		<div class="card-container">
			<PageCard cardData={currentData} />

			<div class="tabs">
				{#each data as project, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="tab {i === slideIndex ? 'active' : ''}"
						on:click={() => gotoSlide(i, LONG_SLIDE_DURATION)}
					/>
				{/each}
			</div>
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

	.tabs {
		width: 100vw;
		height: 10px;
		background-color: $primary;
		display: flex;
		position: absolute;
		bottom: -12px;

		.tab {
			width: 33.3%;
			height: 100%;
			background-color: transparent;

			&.active {
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
