<script lang="ts">
	import LongCard from '$lib/components/project/Long-card.svelte';
	import ChanglingText from '$lib/components/Changling-text.svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';
	import Device from 'svelte-device-info';

	import Contact from '$lib/components/contact/Contact.svelte';
	import { onMount } from 'svelte';
	import Saos from 'saos';
	import {
		getAwardData,
		getClubsData,
		getEducationData,
		getFeaturedProjectsData,
		getWorkData
	} from '$lib/services/firebase';
	import type { LongCardT } from '$lib/types/types';

	let image: HTMLElement;
	let heroImage = '';

	let workData: LongCardT[] = [];
	let educationData: LongCardT[] = [];

	onMount(async () => {
		heroImage = getHeroImage();
		image = document.getElementById('hero-pic')!;
		workData = await getWorkData();
		educationData = await getEducationData();
	});

	function getHeroImage(): string {
		if (Device.isMobile) {
			return 'images/me/portrait.webp';
		} else {
			return 'images/me/thoughtful.webp';
		}
	}

	function mouseMove(event: any) {
		if (Device.isMobile) return;
		const xPercent = event.clientX / image.clientWidth;
		const yPercent = event.clientY / image.clientHeight;

		// translate image
		image.style.transform = `translate(-${xPercent * 100}px, -${yPercent * 100}px)`;
	}
</script>

<svelte:head>
	<title>Etienne Naude</title>
</svelte:head>

<!-- svelte-ignore a11y-no-static-element-interactions-->
<section id="base" on:mousemove={mouseMove}>
	<div class="hero-pic" id="hero-pic">
		<img src={heroImage} alt="background hero" />
	</div>

	<div class="header-text">
		<h1 class="name">Etienne Naude</h1>
		<ChanglingText />
	</div>
</section>

<section id="projects">
	<h2>Projects</h2>

	<Showcase dataFunction={getFeaturedProjectsData} />

	<a class="button more-projects-btn clickable" href="/projects">
		More Projects

		<span class="material-symbol"> arrow_forward </span>
	</a>
</section>

<section id="education">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Education</h2>
	</Saos>

	<div class="long-card-grid">
		{#each educationData as education}
			<LongCard cardData={education} />
		{/each}
	</div>
</section>

<section id="clubs">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Associations</h2>
	</Saos>

	<Showcase dataFunction={getClubsData} />
</section>

<section id="work">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Current Work</h2>
	</Saos>

	<div class="long-card-grid">
		{#each workData as work}
			<LongCard cardData={work} />
		{/each}
	</div>
</section>

<section id="awards">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Awards</h2>
	</Saos>

	<Showcase dataFunction={getAwardData} />
</section>

<section id="contact">
	<Contact />
</section>

<style lang="scss">
	@import './index.scss';
</style>
