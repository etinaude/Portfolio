<script lang="ts">
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { page } from '$app/stores';
	import { getProjectSingleData } from '$lib/services/firebase';
	import Spinner from '$lib/components/layout/Spinner.svelte';
	import Slides from '$lib/components/project/Slides.svelte';
	const id = $page.params.id;
	let projectData: ProjectT | null = null;

	onMount(async () => {
		const id = $page.params.id;
		projectData = await getProjectSingleData(id);
		if (projectData) {
			console.log('Project Data:', projectData);
		} else {
			console.error('Project not found');
		}
	});
</script>

<svelte:head>
	<title>Etienne Naude | Projects</title>
	<meta name="description" content="Etienne Naude projects" />
</svelte:head>

<Header />

<section class="project">
	{#if projectData == null}
		<div class="loading-container">
			<Spinner />
		</div>
	{/if}

	{#if projectData !== null}
		<br />
		<br />

		<h1>{projectData.title}</h1>
		<p>{projectData.description}</p>
		<br />
		<br />

		<div class="image-cont">
			<Slides cardData={projectData} />
		</div>

		<br />
		<br />

		<hr />

		{#if projectData.why}
			<h2>Why?</h2>
			<p>
				{projectData.why}
				<br />
			</p>
			<hr />
		{/if}

		{#if projectData.how}
			<h2>How?</h2>
			<p>
				{projectData.how}
				<br />
			</p>
			<hr />
		{/if}

		{#if projectData.process}
			<h2>Design Process</h2>
			<p>
				{projectData.process}
				<br />
			</p>
			<hr />
		{/if}

		{#if projectData.awards}
			<h2>Awards</h2>
			<p>
				{projectData.awards}
				<br />
			</p>
			<hr />
		{/if}

		{#if projectData.collaborators && projectData.collaborators.length > 0}
			<h2>Collaborators</h2>
			<p>
				{#each projectData.collaborators as collaborator}
					<p>{collaborator}</p>
				{/each}
			</p>
			<hr />
		{/if}

		<button
			class="btn"
			on:click={() => {
				window.open(projectData?.followUrl, '_blank');
			}}
		>
			Read More
			<span class="material-symbol"> link </span>
		</button>
	{/if}
</section>

<section id="contact">
	<Contact />
</section>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.project {
		width: min(1000px, 85vw);

		.image-cont {
			width: 100%;
			aspect-ratio: 16 / 9;
			margin: 0 auto;
			overflow: hidden;
		}
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: 2em;
		padding: 20px 30px;
	}

	hr {
		width: 100%;
		height: 1px;
		background-color: $primary-xxl;
		border: none;
		margin: 40px 0;
	}

	h1,
	h2,
	p {
		text-align: left;
		width: 100%;
	}

	h2 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 2em;
	}

	h1 {
		margin-bottom: 40px;
		font-size: 4em;
	}

	p {
		text-align: justify;
	}

	@media (max-width: 1400px) {
	}

	@media (max-width: 1100px) {
	}

	@media (max-width: 768px) {
	}

	#contact {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
	}
</style>
