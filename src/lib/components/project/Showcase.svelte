<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	let data: ProjectT[] = [];

	export let dataFunction: any;

	onMount(async () => {
		data = await dataFunction();
	});
</script>

<div class="card-side-scroll">
	{#each data as card}
		<Card cardData={card} />
	{/each}
</div>

<style lang="scss">
	@import '../../styles/root.scss';

	.card-side-scroll {
		width: calc(100vw - 30px);
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		padding: 30px 0px;
		justify-content: flex-start;
	}
</style>
