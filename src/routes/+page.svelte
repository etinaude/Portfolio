<script lang="ts">
	import LongCard from '$lib/components/project/LongCard.svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';

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
	import HeroImage from '$lib/components/HeroImage.svelte';

	let workData: LongCardT[] = [];
	let educationData: LongCardT[] = [];

	onMount(async () => {
		workData = (await getWorkData()) as LongCardT[];
		educationData = (await getEducationData()) as LongCardT[];
	});
</script>

<svelte:head>
	<title>Etienne Naude</title>
	<meta name="description" content="Etienne Naude Portfolio" />
</svelte:head>

<HeroImage />

<section id="projects">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Projects</h2>
	</Saos>

	<Showcase dataFunction={getFeaturedProjectsData} />

	<Saos animation={'from-bottom 1s ease'}>
		<a class="button more-projects-btn clickable" href="/projects">
			More Projects

			<span class="material-symbol"> arrow_forward </span>
		</a>
	</Saos>
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
