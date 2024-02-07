<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const videoTypes = ['mp4', 'webm', 'ogg', 'mov'];

	export let cardData: ProjectT;
	let slideIndex = 0;
	let initTime = Date.now();
	let interval: NodeJS.Timeout;
	let mediaList: { type: 'video' | 'image'; url: string | undefined }[] = [];

	let unique = {};
	function reload() {
		unique = {};
	}

	function left() {
		if (slideIndex <= 0) slideIndex = mediaList.length + 1;
		slideIndex--;
		resetTime();
		reload();
	}

	function right() {
		if (slideIndex >= mediaList.length - 1) slideIndex = -1;
		slideIndex++;
		resetTime();
		reload();
	}

	function autoSlide() {
		if (cardData.hoverImg || cardData.hoverVideo) {
			const deltaTime = Date.now() - initTime;
			if (deltaTime >= 5000) {
				initTime = Date.now();
				right();
			}
		}
	}

	// TODO
	const resetTime = () => {
		initTime = Date.now();
	};

	onDestroy(() => {
		clearInterval(interval);
	});

	onMount(() => {
		clearInterval(interval);

		mediaList = [];
		mediaList = mediaList.concat([
			{ type: 'image', url: cardData.imageUrl },
			{ type: 'image', url: cardData.hoverImg },
			{ type: 'video', url: cardData.hoverVideo }
		]);

		if (cardData.media && cardData.media.length > 0) {
			for (let item of cardData.media) {
				const type = item.split('.').pop();
				if (!type) continue;

				if (videoTypes.includes(type)) {
					mediaList.push({ type: 'video', url: item });
				} else {
					mediaList.push({ type: 'image', url: item });
				}
			}
		}

		mediaList = mediaList.filter((item) => item.url);

		if (mediaList.length == 1) return;
		interval = setInterval(autoSlide, 100);
	});
</script>

{#if cardData}
	<div class="image-cont">
		{#if mediaList.length > 1}
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div class="right btn" on:click={right}>
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</div>
		{/if}

		<div class="view">
			{#if mediaList[slideIndex]}
				{#key unique}
					<div in:slide={{ duration: 300, axis: 'x' }} out:slide={{ duration: 300, axis: 'x' }}>
						{#if mediaList[slideIndex].type === 'image'}
							<img src={mediaList[slideIndex].url} alt={cardData.title} />
						{:else}
							<video playsinline autoplay muted loop class="hover-img">
								<source src={mediaList[slideIndex].url} />
							</video>
						{/if}
					</div>
				{/key}
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../styles/root.scss';

	img,
	video {
		width: 400px;
		height: 400px;
		aspect-ratio: 1;
		object-fit: cover;
		left: 0;
	}

	.view {
		display: flex;
		flex-direction: row;
	}

	.image-cont {
		position: relative;
		width: 400px;
		height: 400px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		border-radius: 10px;
		margin-right: 40px;

		&:hover .btn {
			scale: 1;
		}
	}

	.btn {
		position: absolute;
		bottom: 0;
		left: 50%;
		translate: -50% -20%;

		background-color: $primary-t;
		color: white;
		font-size: 1.2em;
		padding: 10px 30px;
		border-radius: 10px;
		cursor: pointer;
		z-index: 1000;
		user-select: none;
		scale: 0;
		transform-origin: center bottom;
	}

	@media (max-width: 600px) {
		.image-cont {
			width: 100%;
			margin-right: 0;
			margin-bottom: 10px;
		}
	}
</style>
