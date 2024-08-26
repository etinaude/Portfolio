<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import PageCard from './PageCard.svelte';
	import { onMount } from 'svelte';

	const SLIDE_DURATION = 3;
	let slideIndex = 0;
	let currentData: ProjectT;

	let data: ProjectT[] = [];

	export let dataFunction: any;

	onMount(async () => {
		data = await dataFunction();
		currentData = data[slideIndex];

		setInterval(() => {
			slideIndex = (slideIndex + 1) % data.length;
			currentData = data[slideIndex];
		}, SLIDE_DURATION * 1000);
	});
</script>

<Saos animation={'from-bottom 1s ease'}>
	{#if currentData}
		<div class="card-container">
			<PageCard cardData={currentData} />
		</div>
	{/if}
</Saos>

<style lang="scss">
	@import '../../styles/root.scss';

	.card-container {
		height: 80vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		.card-container {
			align-items: flex-start;
			margin-top: 10px;
		}
	}
</style>
