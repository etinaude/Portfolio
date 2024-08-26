<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Saos from 'saos';
	import Modal from './Modal.svelte';
	import PageCard from './PageCard.svelte';

	let data: ProjectT[] = [];
	let openIndex = -1;

	export let dataFunction: any;

	onMount(async () => {
		data = await dataFunction();
	});
</script>

<Modal projectsList={data} projectIndex={openIndex} />

<Saos animation={'from-bottom 1s ease'}>
	<!-- if no data -->
	{#if data.length === 0}
		<div>Loading...</div>
	{:else}
		<div class="side-scroll-container">
			<PageCard cardData={data[0]} />
		</div>
	{/if}

	<!-- else -->
</Saos>

<style lang="scss">
	.side-scroll-container {
		height: 90vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
