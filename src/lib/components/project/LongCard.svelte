<script lang="ts">
	import type { LongCardT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import Saos from 'saos';
	import Device from 'svelte-device-info';

	export let cardData: LongCardT;

	let imgElement: HTMLElement;
	const animationSide = cardData.side === 'left' ? 'from-right' : 'from-left';

	onMount(() => {
		const mobile = Device.isMobile || Device.isTablet || Device.canHover === false;

		if (mobile) VanillaTilt.init(imgElement, { glare: true, max: 6, 'max-glare': 0.7 });
	});
</script>

<div class="long-card {cardData.side}">
	<div class="text">
		<Saos animation={animationSide + ' 1s ease'}>
			<h3>{cardData.title}</h3>
			<p>{cardData.description}</p>
		</Saos>
	</div>

	<Saos animation={animationSide + ' 1s ease'}>
		<img
			class="tilt"
			alt={cardData.title + 'logo'}
			src={cardData.imageUrl}
			bind:this={imgElement}
		/>
	</Saos>
</div>

<style lang="scss">
	@import 'src/lib/styles/root.scss';
	.long-card {
		display: flex;
		text-decoration: none;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 30px;

		.text {
			max-width: calc(100% - 210px);
			margin-top: auto;
		}

		img {
			@include border;

			height: min(180px, 50vw);
			place-self: center;

			&:hover {
				@include transition-long;
				scale: 1.1;
			}
		}

		&.right {
			flex-direction: row;
		}
	}

	@media (max-width: 768px) {
		.long-card {
			flex-direction: column-reverse;

			align-items: center;

			.text {
				max-width: 100%;
				margin-top: 0;
			}

			&.right {
				flex-direction: column-reverse;
			}
		}
	}
</style>
