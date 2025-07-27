<script lang="ts">
	import type { posT } from '$lib/types/types';

	export let pos: posT;

	const outerOffset = 12;
</script>

<div
	class="outer {pos.clickable ? 'clickable' : ''}"
	style="translate:  {pos.x - outerOffset}px {pos.y - outerOffset}px"
>
	<div class="inner" />
</div>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	.outer {
		@include flex-center;

		border-radius: 50%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		pointer-events: none;
		transition: none;
		width: 20px;
		height: 20px;
		background-color: transparent;
		border: 2px solid $light;

		&.clickable {
			animation: pulse 1s infinite;

			.inner {
				background-color: $light;
				width: 5px;
				height: 5px;
				border-radius: 50%;
			}
		}
	}

	@keyframes pulse {
		0% {
			scale: 1;
			border-color: $light;
		}
		100% {
			scale: 1.8;
			border-color: transparent;
		}
	}

	.inner {
		width: 5px;
		height: 5px;
		background-color: $accent;
		border-radius: 50%;
	}

	@media (hover: none) {
		.outer,
		.inner {
			display: none;
		}
	}
	@media (pointer: coarse) {
		.outer,
		.inner {
			display: none;
		}
	}
</style>
