<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import Modal from './Modal.svelte';
	import PageCard from './PageCard.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const SLIDE_DURATION = 3;
	let slideIndex = 0;
	let currentData: ProjectT;

	let data: ProjectT[] = [];
	let openIndex = -1;
	let unique = {};

	export let dataFunction: any;

	onMount(async () => {
		data = await dataFunction();
		currentData = data[slideIndex];

		setInterval(() => {
			slideIndex = (slideIndex + 1) % data.length;
			currentData = data[slideIndex];
			unique = {};
		}, SLIDE_DURATION * 1000);
	});
</script>

<Modal projectsList={data} projectIndex={openIndex} />

<Saos animation={'from-bottom 1s ease'}>
	{#if currentData}
		{#key unique}
			<div class="side-scroll-container" transition:fade={{ duration: 1000 }}>
				<PageCard cardData={currentData} />
			</div>
		{/key}
	{/if}
</Saos>

<style lang="scss">
	.side-scroll-container {
		height: 90vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
