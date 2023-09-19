<script lang="ts">
	import Tile from '$lib/components/project/Tile.svelte';
	import type { ProjectT } from '$lib/types/types';
	import Saos from 'saos';
	import { getFeaturedProjectsData, getProjectsData } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import Showcase from '$lib/components/project/Showcase.svelte';

	let smallProjects: ProjectT[] = [];

	onMount(async () => {
		smallProjects = (await getProjectsData()) as ProjectT[];
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
</style>
