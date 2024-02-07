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

			<div class="read-more clickable tile_url" aria-label="project link {cardData.title}">
				Read More
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</div>
		</div>
	</div>
</Saos>

<style lang="scss">
	@import '../../styles/root.scss';

	.tile {
		@include transition-long;
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
			justify-content: center;
			align-items: center;
			overflow: hidden;
			max-height: 0;
			backdrop-filter: blur(1px);
		}

		&:hover {
			scale: 1.1;
			z-index: 10;
			border-radius: 10px;

			.text {
				height: auto;
				max-height: 50%;
				padding-bottom: 40px;
			}
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
		margin-top: 20px;
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
		font-size: 0.7em;
		margin-top: 10px;
		background-color: $primary-t;
		color: $accent;
		min-width: 70%;

		&:hover {
			background-color: $primary-tt;
		}
	}

	@media (max-width: 768px) {
		.tile {
			width: 100%;
			height: 100%;
		}
	}
</style>
