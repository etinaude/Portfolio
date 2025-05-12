<script lang="ts">
	import Tile from '$lib/components/project/Tile.svelte';
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import { getFeaturedProjectsData, getProjectsData } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';
	import { tagOptions } from '$lib/services/tags';
	import Modal from '$lib/components/project/Modal.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Spinner from '$lib/components/layout/Spinner.svelte';

	let currentFilter = '';
	let allProjects: ProjectT[] = [];
	let smallProjects: ProjectT[] = [];
	let openIndex = -1;

	function toggleTag(tag: string) {
		tag = tag.toLowerCase();
		currentFilter = currentFilter == tag ? '' : tag;
		let tempProjects: ProjectT[] = [];
		smallProjects = [];

		if (currentFilter == '') {
			tempProjects = allProjects;
		} else {
			tempProjects = allProjects.filter((project) => {
				return (project.tags ?? [])
					.map((projectTag) => projectTag.toLowerCase())
					.includes(currentFilter);
			});
			if (tempProjects.length == 0) tempProjects = allProjects;
		}

		// delay to show loading spinner and avoid slow rendering bugs
		setTimeout(() => {
			smallProjects = tempProjects;
		}, 100);
	}

	onMount(async () => {
		allProjects = (await getProjectsData()) as ProjectT[];
		allProjects = allProjects.sort((a, b) => (a.priority ?? 10) - (b.priority ?? 10));

		// get tags from url
		const urlParams = new URLSearchParams(window.location.search);
		let tag = urlParams.get('tag') || '';
		toggleTag(tag);
	});
</script>

<svelte:head>
	<title>Etienne Naude | Projects</title>
	<meta name="description" content="Etienne Naude projects" />
</svelte:head>

<Header />

<section>
	<Modal projectsList={smallProjects} projectIndex={openIndex} />

	<h2 class="featured-title">Featured Projects</h2>

	<div class="showcase">
		<Showcase dataFunction={getFeaturedProjectsData} />
	</div>

	<Saos animation={'from-bottom 1s ease'}>
		<h2>More Projects</h2>
	</Saos>

	<!-- tag list -->
	<Saos animation={'from-bottom 1s ease'}>
		<div class="filter-bar">
			<div class="tag-list">
				{#each tagOptions as tagItem}
					<!-- svelte-ignore a11y-no-static-element-interactions  a11y-click-events-have-key-events-->
					<div
						class="clickable tag {tagItem.toLowerCase() == currentFilter ? 'active' : ''}"
						on:click={() => toggleTag(tagItem)}
					>
						<div class="text">
							{tagItem}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Saos>

	{#if smallProjects.length == 0}
		<div class="loading-container">
			<Spinner />
		</div>
	{/if}
	<div class="tiles">
		{#each smallProjects as project, i}
			<Tile cardData={project} index={i} bind:openIndex />
		{/each}
	</div>
</section>

<section id="contact">
	<Contact />
</section>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.tiles {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		margin-bottom: 10em;
	}

	.loading-container {
		display: flex;
		justify-content: center;
		margin-top: 100px;
		min-height: 100vh;
	}

	h2 {
		margin: 60px 0 0px 0;
		text-align: center;
	}

	section {
		--background: $primary-xl;
	}

	.filter-bar {
		.tag-list {
			display: flex;
			flex-wrap: wrap;

			.tag {
				@include border-d;
				padding: 10px 20px;
				margin: 30px 10px;
				color: $light;

				&.active {
					color: $primary;
					background-color: $accent;
				}
			}
		}

		h2 {
			margin-top: 2em;
			text-align: center;
			width: 100%;
		}
	}

	@media (max-width: 1100px) {
		.filter-bar {
			.tag-list {
				justify-content: center;
				margin-bottom: 40px;

				.tag {
					margin: 10px 5px;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.tiles {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		.featured-title {
			display: none;
		}

		.showcase {
			margin-top: 100px;
		}
	}

	#contact {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
	}
</style>
