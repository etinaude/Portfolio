<script lang="ts">
	import type { LongCardT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import Saos from 'saos';
	import Device from 'svelte-device-info';

	export let cardData: LongCardT;
	export let index: number;

	let side = index % 2 === 0 ? 'left' : 'right';

	let imgElement: HTMLElement;

	onMount(() => {
		const mobile = Device.isMobile || Device.isTablet || Device.canHover === false;

		if (mobile) VanillaTilt.init(imgElement, { glare: true, max: 6, 'max-glare': 0.7 });
	});
</script>

<div class="long-card {side}">
	<div class="text">
		<Saos animation={'from-bottom' + ' 1s ease'}>
			<h3>{cardData.title}</h3>
			<p>{cardData.description}</p>
		</Saos>
	</div>

	<Saos animation={'from-bottom' + ' 1s ease'}>
		<img
			class="tilt"
			alt={cardData.title + 'logo'}
			src={cardData.media[0]}
			bind:this={imgElement}
		/>
	</Saos>
</div>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.long-card {
		display: flex;
		text-decoration: none;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 120px;
		align-items: center;

		.text {
			max-width: calc(100% - 280px);
			margin-top: auto;
		}

		img {
			@include border;

			height: min(200px, 50vw);
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
