<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Card from '$lib/card.svelte';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	onMount(() => {
		const elements = document.querySelectorAll('.tilt');

		VanillaTilt.init(elements, { glare: true });
	});
</script>

<svelte:head>
	<title>Etienne Naude</title>
	<meta name="description" content="Etienne Naude projects" />
</svelte:head>

<section id="projects">
	<h2>Projects</h2>

	<div class="flex-row">
		<Card
			title="Automated Zen Garden"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			title="Headstrong Messenger"
			description="I am part of a research team which created an interactive Ionic chatbot app to help struggling teen with depression and anxiety.

			I am currently heading front end development for this project, using Ionic and Angular"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1647521355/portfolio/headstrongImg.png"
		/>

		<Card
			title="Decimal Clock"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624922964/portfolio/clocksqrImg.jpg"
		/>

		<Card
			title="Automated Zen Garden"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			title="Headstrong Messenger"
			description="I am part of a research team which created an interactive Ionic chatbot app to help struggling teen with depression and anxiety.

		I am currently heading front end development for this project, using Ionic and Angular"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1647521355/portfolio/headstrongImg.png"
		/>

		<Card
			title="Decimal Clock"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624922964/portfolio/clocksqrImg.jpg"
		/>
	</div>

	<h2>More Projects</h2>

	<div class="flex-row">
		<Card
			small="true"
			title="Automated Zen Garden"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			small="true"
			title="Headstrong Messenger"
			description="I am part of a research team which created an interactive Ionic chatbot"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1647521355/portfolio/headstrongImg.png"
		/>

		<Card
			small="true"
			title="Decimal Clock"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624922964/portfolio/clocksqrImg.jpg"
		/>

		<Card
			small="true"
			title="Automated Zen Garden"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			small="true"
			title="Headstrong Messenger"
			description="I am part of a research team which created an interactive Ionic chatbot"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1647521355/portfolio/headstrongImg.png"
		/>

		<Card
			small="true"
			title="Decimal Clock"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624922964/portfolio/clocksqrImg.jpg"
		/>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		box-sizing: border-box;
		padding: 0 5rem;
		padding-bottom: 10vh;
		margin: auto;
		top: 0;
		background-color: #333;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1200px;
	}

	// Mobile
	@media (max-width: 700px) {
		section {
			padding: 3em;
		}

		h2 {
			margin-top: 2em;
		}
	}

	@media (max-width: 500px) {
		section {
			padding: 1em;
		}

		h2 {
			margin-top: 1em;
		}
	}

	// Large displays
	@media (min-width: 1900px) {
		h2 {
			margin-top: 3em;
		}
	}
</style>
