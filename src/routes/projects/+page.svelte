<script lang="ts">
	import Tile from '$lib/components/project/Tile.svelte';
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import { getFeaturedProjectsData, getProjectsData } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';

	const tagOptions: string[] = [
		'Hardware',
		'Software',
		'Web',
		'Mobile',
		'Wood Work',
		'Art',
		'Design',
		'Other'
	];
	let currentFilter = '';
	let allProjects: ProjectT[] = [];
	let smallProjects: ProjectT[] = [];

	function toggleTag(tag: string) {
		if (currentFilter == tag) {
			currentFilter = '';
		} else {
			currentFilter = tag;
		}

		if (currentFilter == '') {
			smallProjects = allProjects;
			return;
		}

		smallProjects = allProjects.filter((project) => {
			return (project.tags ?? []).includes(currentFilter);
		});
	}

	onMount(async () => {
		allProjects = (await getProjectsData()) as ProjectT[];
		smallProjects = allProjects;
	});
</script>

<svelte:head>
	<title>Etienne Naude - Projects</title>
	<meta name="description" content="Etienne Naude projects" />
</svelte:head>

<section>
	<Saos animation={'from-bottom 1s ease'}>
		<h2>Featured Projects</h2>
	</Saos>

	<Showcase dataFunction={getFeaturedProjectsData} />

	<div class="filter-bar">
		<h2>Filters</h2>
		<div class="tag-list">
			{#each tagOptions as tagItem}
				<div
					class="tag {tagItem == currentFilter ? 'active' : ''}"
					on:click={() => toggleTag(tagItem)}
				>
					<div class="text">
						{tagItem}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<Saos animation={'from-bottom 1s ease'}>
		<h2>More Projects</h2>
	</Saos>

	<div class="tiles">
		{#each smallProjects as project}
			<Tile cardData={project} />
		{/each}
	</div>
</section>

<style lang="scss">
	@import './../../lib/styles/root.scss';

	.tiles {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		margin-bottom: 2em;
	}

	h2 {
		margin-top: 2em;
	}

	section {
		--background: #333;
		padding-top: 100px;
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
</style>
