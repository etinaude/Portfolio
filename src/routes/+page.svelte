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
	import Header from '$lib/components/layout/Header.svelte';

	let workData: LongCardT[] = [];
	let educationData: LongCardT[] = [];

	onMount(async () => {
		workData = (await getWorkData()) as LongCardT[];
		educationData = (await getEducationData()) as LongCardT[];

		educationData = educationData.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
		workData = workData.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));
	});
</script>

<svelte:head>
	<title>Etienne Naude | Portfolio</title>
	<meta name="description" content="Etienne Naude Portfolio" />
</svelte:head>

<Header />

<HeroImage />

<section id="projects">
	<Saos animation={'from-bottom 1s ease'}>
		<div class="title">
			<h2>Projects</h2>

			<a class="button more-projects-btn clickable" href="/projects">
				More Projects
				<span class="material-symbol"> keyboard_double_arrow_right </span>
			</a>
		</div>
	</Saos>

	<Showcase dataFunction={getFeaturedProjectsData} />
</section>

<section id="education">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Education</h2>
	</Saos>

	<div class="long-card-grid">
		{#each educationData as education, i (i)}
			<LongCard cardData={education} index={i} />
		{/each}
	</div>
</section>

<!-- <section id="clubs">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Associations</h2>
	</Saos>

	<Showcase dataFunction={getClubsData} />
</section> -->

<section id="work">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Current Work</h2>
	</Saos>

	<div class="long-card-grid">
		{#each workData as work, i (i)}
			<LongCard cardData={work} index={i} />
		{/each}
	</div>
</section>

<!-- <section id="awards">
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Awards</h2>
	</Saos>

	<Showcase dataFunction={getAwardData} />
</section> -->

<section id="contact">
	<Contact />
</section>

<style lang="scss">
	@use './index.scss';
</style>
