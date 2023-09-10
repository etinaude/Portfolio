<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import Device from 'svelte-device-info';

	export let cardData: ProjectT;

	let card: HTMLElement;

	onMount(() => {
		if (!Device.isMobile) {
			VanillaTilt.init(card, { glare: true });
		}
	});
</script>

<div class="outer tilt">
	<div class="card tilt" bind:this={card}>
		{#if cardData.follow_url}
			<!-- svelte-ignore security-anchor-rel-noreferrer a11y-missing-content-->
			<a
				href={cardData.follow_url}
				target="_blank"
				rel="noopener"
				class="clickable"
				aria-label="project link {cardData.title}"
			/>
		{/if}

		<div class="img clickable">
			<img src={'images/' + cardData.image_url} alt={cardData.title} />

			{#if cardData.hover_img}
				<img class="hover-img" src={'images/' + cardData.hover_img} alt="project hover" />
			{:else if cardData.hover_video}
				<video playsinline autoplay muted loop class="hover-img">
					<source src={'images/' + cardData.hover_video} />
				</video>
			{/if}
		</div>

		<h3>{cardData.title}</h3>

		<caption>{cardData.description}</caption>

		{#if cardData.follow_url}
			<div class="read-more">read more →</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../styles/root.scss';
	.card {
		@include border;
		@include flex-center;

		text-align: center;
		flex-direction: column;
		width: 360px;
		overflow: hidden;
		padding-bottom: 20px;
		box-sizing: border-box;
		position: relative;
		margin-right: 30px;

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
</style>
