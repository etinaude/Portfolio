<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	export let cardData: ProjectT;
	export let index = -1;

	export let openIndex = -1;

	function open() {
		openIndex = -1;
		openIndex = index;
	}
</script>

<div class="tile" on:click={open}>
	<div class="img">
		<img src={cardData.media[0]} alt={cardData.title} class="tile_image" />
	</div>
	<div class="gradiant" />
	<div class="darkness" />

	<div class="text clickable">
		<h3>{cardData.title}</h3>

		<p>{cardData.description}</p>
	</div>
</div>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	.tile {
		@include transition-long;
		// overflow: hidden;
		background-color: $primary-xxl;
		display: flex;
		text-align: center;
		position: relative;
		width: 50%;
		aspect-ratio: 16/9;

		.img {
			width: 100%;
			height: 100%;
			bottom: 0;
			left: 0;
			@include transition-long;
			position: relative;
			overflow: hidden;

			img {
				@include transition-long;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.text {
			@include transition-long;

			position: absolute;
			bottom: 0;
			margin-left: 50px;
			margin-bottom: 0px;

			h3 {
				font-size: 2em;
				text-align: left;
			}

			p {
				@include transition-long;

				margin-top: 10px;
				max-width: 500px;
				text-align: left;
				max-height: 0px;
				opacity: 0;
				overflow: hidden;
			}
		}

		.gradiant,
		.darkness {
			@include transition-long;
			width: 100%;
			height: 100%;
			position: absolute;
			background: linear-gradient(0deg, #0008 0%, #0000 100%);
		}

		.darkness {
			background-color: #0005;
			opacity: 0;
		}

		&:hover {
			z-index: 10;
			box-shadow: 0px 0px 5px 0px $primary;

			.text {
				margin-bottom: 20px;
			}

			p {
				max-height: 80px;
				opacity: 1;
			}

			.gradiant {
				opacity: 0;
			}

			.darkness {
				opacity: 1;
			}

			.img {
				img {
					scale: 1.1;
				}
			}
		}

		.read-more {
			// @include read-more;
			margin-bottom: 20px;
			padding-left: 0px;
			padding-right: 0px;
			font-size: 0.9em;

			.material-symbol {
				font-size: 1.2em;
				vertical-align: middle;
			}
		}
	}

	@media (max-width: 768px) {
		.tile {
			width: 100%;
			height: 100%;
		}
	}
</style>
