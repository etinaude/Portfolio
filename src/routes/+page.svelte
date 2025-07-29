<script lang="ts">
	import LongCard from '$lib/components/layout/LongCard.svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';

	import Contact from '$lib/components/contact/Contact.svelte';
	import { onMount } from 'svelte';
	import Saos from 'saos';
	import { getEducationData, getFeaturedProjectsData, getWorkData } from '$lib/services/firebase';
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
		<div class="showcase">
			<Showcase dataFunction={getFeaturedProjectsData} moreProjects={true} />
		</div>

		<button
			class="more-projects-btn clickable"
			on:click={() =>
				window.scrollTo({
					top: document.getElementById('education')?.offsetTop,
					behavior: 'smooth'
				})}
		>
			70+ More Projects
			<span class="material-symbol"> keyboard_double_arrow_right </span>
		</button>
	</Saos>
</section>

<section id="education">
	<h2>Education</h2>

	<div class="long-card-grid">
		{#each educationData as education, i (i)}
			<LongCard cardData={education} index={i} />
		{/each}
	</div>
</section>

<section id="work">
	<h2>Work</h2>

	<div class="long-card-grid">
		{#each workData as work, i (i)}
			<LongCard cardData={work} index={i} />
		{/each}
	</div>
</section>

<section id="contact">
	<Contact />
</section>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;
	@use './../lib/styles/fonts.scss' as *;

	h2 {
		text-align: center;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 3em;
		}
	}

	#projects {
		--background: #333;
		margin-top: 100vh;
		box-shadow: #111 0 0 30px;
		position: sticky;
		height: 120vh;
		padding-top: 100px;

		.more-projects-btn {
			@include button;
			width: 100%;
			font-weight: bold;
			left: 50%;
			transform: translateX(-50%);
		}

		// mobile
		@media (max-width: 768px) {
			.title {
				grid-template-columns: 1fr;
				grid-gap: 1.5rem;

				a {
					height: 10px;
				}
			}

			.more-projects-btn {
				width: 85%;
			}
		}
	}

	#education {
		--background: #272727;
		box-shadow: #111 0 0 30px;
		padding-top: 10vh;
	}

	#clubs {
		--background: #333;
		padding-top: 10vh;
	}

	#work {
		--background: #333;
		padding-top: 10vh;
	}

	#awards {
		--background: #272727;
		position: sticky;
	}

	#contact {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
	}

	.long-card-grid {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: min(90%, 1200px);
	}
</style>
