<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Saos from 'saos';

	let data: ProjectT[] = [];

	export let dataFunction: any;

	onMount(async () => {
		data = await dataFunction();
	});
</script>

<Saos animation={'from-bottom 1s ease'}>
	<div class="side-scroll-container">
		<div class="card-side-scroll">
			{#each data as card}
				<Card cardData={card} />
			{/each}
		</div>
	</div>
</Saos>

<style lang="scss">
	.side-scroll-container {
		max-width: 100vw;
		justify-content: center;
		display: flex;

		.card-side-scroll {
			width: 100%;
			display: grid;
			grid-auto-flow: column;
			place-items: center;
			grid-column-gap: 20px;
			overflow-x: auto;
			padding: 30px;
		}
	}
</style>
