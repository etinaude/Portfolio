<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Card from '$lib/card.svelte';
	import { onMount } from 'svelte';

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
	<div class="waves">
		<svg viewBox="0 0 1440 190">
			><path
				d="M0,38L34.3,53.8C68.6,70,137,101,206,104.5C274.3,108,343,82,411,60.2C480,38,549,19,617,19C685.7,19,754,38,823,60.2C891.4,82,960,108,1029,101.3C1097.1,95,1166,57,1234,44.3C1302.9,32,1371,44,1440,50.7C1508.6,57,1577,57,1646,60.2C1714.3,63,1783,70,1851,88.7C1920,108,1989,139,2057,136.2C2125.7,133,2194,95,2263,88.7C2331.4,82,2400,108,2469,98.2C2537.1,89,2606,44,2674,44.3C2742.9,44,2811,89,2880,110.8C2948.6,133,3017,133,3086,129.8C3154.3,127,3223,120,3291,101.3C3360,82,3429,51,3497,41.2C3565.7,32,3634,44,3703,53.8C3771.4,63,3840,70,3909,60.2C3977.1,51,4046,25,4114,28.5C4182.9,32,4251,63,4320,82.3C4388.6,101,4457,108,4526,117.2C4594.3,127,4663,139,4731,120.3C4800,101,4869,51,4903,25.3L4937.1,0L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
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

<style>
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		box-sizing: border-box;
		padding: 0 5rem;
		padding-bottom: 10vh;
		margin: auto;
		position: sticky;
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
</style>
