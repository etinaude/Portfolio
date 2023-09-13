<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import { getFeaturedProjectsData } from '$lib/services/firebase';

	let projectsData: ProjectT[] = [];

	onMount(async () => {
		projectsData = await getFeaturedProjectsData();
	});
</script>

<div class="card-side-scroll">
	{#each projectsData as card}
		<Card cardData={card} />
	{/each}
</div>

<style lang="scss">
	@import '../../styles/root.scss';

	.container {
		position: relative;
		height: calc(100vh - 200px);
		width: 1200px;
		margin-bottom: 100px;

		&:hover {
			.card:nth-child(1) {
				translate: -400px;
				rotate: -10deg;
			}

			.card:nth-child(2) {
				translate: 0 -35px;
			}

			.card:nth-child(3) {
				translate: 400px;
				rotate: 10deg;
			}
		}

		.card:nth-child(1) {
			translate: -40px;
			rotate: -5deg;
		}

		.card:nth-child(3) {
			translate: 40px;
			rotate: 5deg;
		}
	}

	.cards {
		position: absolute;
		bottom: 0;
		left: 400px;
	}

	.card {
		@include flex-center;

		transform-origin: 50% 70%;
		width: min(420px, 50vw);
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 2px #0000004d;
		background-color: $primary-xxl;
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
		box-sizing: border-box;
		position: absolute;
		bottom: 0;
		left: 50%;

		a {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: 0;
		}

		.img {
			position: relative;
			width: 100%;
			aspect-ratio: 1;
		}

		.hover-img {
			display: none;
		}

		&:hover {
			.hover-img {
				display: block;
			}
		}
	}

	h3 {
		color: $accent;
		margin-bottom: 8px;
		margin-left: 10px;
		margin-right: 10px;
	}

	caption {
		padding: 0px 30px;
		font-size: 25px;
		height: 10em;
	}

	.read-more {
		margin-top: 10px;
		color: #bbb;
		font-size: 0.9em;
	}

	img,
	video {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		position: absolute;
		left: 0;
	}

	.card-side-scroll {
		@include card-side-scroll;
	}
</style>
