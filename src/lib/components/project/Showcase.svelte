<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import Modal from './Modal.svelte';
	import PageCard from './PageCard.svelte';
	import { onMount } from 'svelte';

	const SLIDE_DURATION = 3;
	let slideIndex = 0;
	let currentData: ProjectT;

	let data: ProjectT[] = [];
	let openIndex = -1;

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

<Modal projectsList={data} projectIndex={openIndex} />

<Saos animation={'from-bottom 1s ease'}>
	{#if currentData}
		<div class="card-container">
			<PageCard cardData={currentData} />
		</div>
	{/if}
</Saos>

<style lang="scss">
	.card-container {
		height: 90vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
