<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import Slides from './Slides.svelte';
	import { fade, scale } from 'svelte/transition';

	export let projectsList: ProjectT[];
	export let projectIndex: number;

	// used to reload the component
	let unique = {};
	function reload() {
		unique = {};
	}

	function exit() {
		projectIndex = -1;
	}

	function noExit(e: Event) {
		e.stopPropagation();
	}

	function left(e: Event) {
		if (projectIndex <= 0) projectIndex = projectsList.length + 1;

		projectIndex--;
		reload();
		noExit(e);
	}

	function right(e: Event) {
		if (projectIndex >= projectsList.length - 1) projectIndex = -1;

		projectIndex++;
		reload();
		noExit(e);
	}
</script>

{#if projectsList[projectIndex]}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="background" on:click={exit} transition:fade={{ duration: 200 }}>
		<div class="left next-btn" on:click={left}>
			<span class="material-symbol"> keyboard_double_arrow_left </span>
		</div>
		<div class="right next-btn" on:click={right}>
			<span class="material-symbol"> keyboard_double_arrow_right </span>
		</div>
		{#if projectsList[projectIndex].followUrl}
			<a
				href={projectsList[projectIndex].followUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="read-more mobile clickable"
				transition:scale={{ duration: 200, delay: 200 }}
			>
				Open Link
				<span class="material-symbol"> link </span>
			</a>
		{/if}

		{#key unique}
			<div class="inner" on:click={noExit} transition:scale={{ duration: 200, delay: 200 }}>
				<Slides cardData={projectsList[projectIndex]} />

				<div class="text">
					<h3>{projectsList[projectIndex].title}</h3>

					<caption
						>{projectsList[projectIndex].description || projectsList[projectIndex].tldr}</caption
					>

					{#if projectsList[projectIndex].followUrl}
						<a
							href={projectsList[projectIndex].followUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="read-more desktop clickable"
						>
							Open Link
							<span class="material-symbol"> link </span>
						</a>
					{/if}
				</div>
			</div>
		{/key}
	</div>
{/if}

<style lang="scss">
	@import '../../styles/root.scss';

	.text {
		padding: 20px;
		max-height: 600px;
		overflow: auto;
		margin-bottom: 30px;
		position: relative;

		h3 {
			color: $accent;
			margin-bottom: 8px;
			text-align: center;
		}

		caption {
			margin-top: 10px;
			width: 300px;
		}
	}

	.read-more {
		@include button;

		margin-top: 20px;
		font-size: 0.9em;
		height: 10px;

		span {
			margin-left: 10px;
			scale: 1.4;
		}

		&.mobile {
			display: none;
			position: absolute;
			bottom: 20px;
			left: 50%;
			translate: -50% 0;
			width: 150px;
			min-width: 0;
		}
	}

	.background {
		z-index: 100;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: $primary-tt;

		.inner {
			@include border-d;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			background: $primary;
			min-height: 400px;
			min-width: 400px;
			border-radius: 10px;
			padding: 20px;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}

	.next-btn {
		@include button;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 2.5em;
		padding: 10px;
		min-width: auto;
		cursor: pointer;
		z-index: 1000;
		user-select: none;

		&.left {
			left: 50%;
			translate: -520px;
			transform-origin: top left;
		}

		&.right {
			right: 50%;
			translate: 520px;
			transform-origin: top right;
		}

		&:hover {
			scale: 1.05;
		}
	}

	@media (max-width: 1200px) {
		.next-btn {
			font-size: 2em;
			padding: 5px;
			bottom: -12px;
			top: auto;
			margin: 0;

			&.left {
				left: 20px;
				translate: 0;
			}

			&.right {
				right: 20px;
				translate: 0;
			}
		}

		.read-more {
			&.mobile {
				display: flex;
			}

			&.desktop {
				display: none;
			}
		}
	}

	@media (max-width: 800px) {
		.text {
			padding: 10px;
			max-height: 400px;
		}

		.background {
			.inner {
				max-height: calc(100vh - 150px);
				max-width: 80vw;
				min-width: 0;
				top: 10px;
				transform: translate(-50%, 0);

				flex-direction: column;
			}
		}
	}
</style>