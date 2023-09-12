<script lang="ts">
	import type { posT } from '$lib/types/types';

	export let pos: posT;

	const outerOffest = 12;
</script>

<div
	class="outer {pos.clickable ? 'clickable' : ''}"
	style="translate:  {pos.x - outerOffest}px {pos.y - outerOffest}px"
>
	<div class="inner" />
</div>

<style lang="scss">
	@import './../../styles/root.scss';

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
		border: 1px solid $light;

		&.clickable {
			cursor: pointer;
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
			scale: 1.5;
			border-color: $accent;
		}
	}

	.inner {
		width: 4px;
		height: 4px;
		background-color: $accent;
		border-radius: 50%;
	}

	@media (prefers-color-scheme: dark) {
		.outer {
			border: 1px solid $light;
		}
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
