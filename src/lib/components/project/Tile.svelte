<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	export let cardData: ProjectT;
	export let index = -1;

	export let openIndex = -1;
</script>

<Saos animation={'from-bottom 1s ease'}>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="tile" on:click={() => (openIndex = index)}>
		<div class="img">
			<img src={cardData.imageUrl} alt={cardData.title} loading="lazy" class="tile_image" />
		</div>

		<div class="text">
			<h3>{cardData.title}</h3>

			<caption>{cardData.description}</caption>

			{#if cardData.followUrl}
				<!-- svelte-ignore security-anchor-rel-noreferrer a11y-missing-content-->
				<a
					class="read-more clickable tile_url"
					href={cardData.followUrl}
					target="_blank"
					rel="noopener"
					aria-label="project link {cardData.title}"
					>Read More <span class="material-symbol"> double_arrow </span></a
				>
			{/if}
		</div>
	</div>
</Saos>

<style lang="scss">
	@import '../../styles/root.scss';

	.tile {
		overflow: hidden;
		border-radius: 0px;
		background-color: $primary-xxl;
		display: flex;
		text-align: center;
		position: relative;

		.img,
		.text {
			width: 100%;
			height: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}

		.text {
			@include transition-long;

			z-index: 5;
			background-color: $primary-t;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			height: 0px;
			backdrop-filter: blur(1px);
		}

		&:hover .text {
			height: 100%;
		}

		.img {
			position: relative;
			width: 100%;
			aspect-ratio: 1;
		}
	}

	h3 {
		color: $accent;
		margin-bottom: 8px;
	}

	caption {
		padding: 0px 30px;
	}

	.img > * {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		position: absolute;
		left: 0;
	}

	.read-more {
		@include button;

		height: 0;
		position: absolute;
		bottom: 20px;
		left: 50%;
		translate: -50%;
		font-size: 0.7em;
	}

	@media (max-width: 768px) {
		.tile {
			width: 100%;
			height: 100%;
		}
	}
</style>
