<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import PageCard from '$lib/components/project/FeaturedProject.svelte';
	import Tile from '$lib/components/project/Tile.svelte';
	import { addNewProject, getProjectsData } from '$lib/services/firebase';
	import { tagOptions } from '$lib/services/tags';
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';
	import Modal from '$lib/components/project/Modal.svelte';

	let allProjects: ProjectT[] = [];
	let openIndex = -1;

	let project: ProjectT = {
		title: '',
		description: '',
		tldr: '',
		followUrl: '',
		featured: false,
		priority: 10,
		tags: [],
		media: ['']
	};

	let tag: string = '';
	let banner: Banner;

	async function submit() {
		banner.show('Submitting', 'info');

		project.media = project.media.filter((l) => l !== '');

		if (project.title === '') return banner.show('No Title', 'error');
		if (project.description === '') return banner.show('No Description', 'error');
		if (project.media.length === 0) return banner.show('No Image Url', 'error');

		const isSuccess = await addNewProject(project);

		if (isSuccess) {
			banner.show('Project added successfully', 'success');
		} else {
			banner.show('Error Reaching Firebase', 'error');
		}
	}

	async function addTag() {
		if (!project.tags) project.tags = [];
		if (tag === '') return;
		if (project.priority === undefined) project.priority = 10;
		if (project.featured == undefined) project.featured = false;

		project.tags.push(tag);
		tag = '';

		// deep copy and remove duplicates
		project.tags = [...new Set(project.tags)];
	}

	async function addMedia() {
		project.media = [...project.media, ''];
	}

	async function removeTag(tag: string) {
		if (!project.tags) return;
		project.tags = project.tags.filter((t) => t !== tag);
	}

	onMount(async () => {
		allProjects = (await getProjectsData()) as ProjectT[];

		for (let projectItem of allProjects) {
			projectItem.tags = projectItem.tags ?? [];
			projectItem.media = projectItem.media ?? [];
		}
	});
</script>

<section>
	<Modal projectsList={[project]} projectIndex={openIndex} />

	<div class="row">
		<div class="column demo">
			<h2>Search project</h2>
			<div class="field">
				{#if allProjects.length > 0}
					<select name="tags" id="tags" bind:value={project}>
						{#each allProjects as projectItem}
							<option value={projectItem}>{projectItem.title}</option>
						{/each}
						<option value={{}}>New </option>
					</select>
				{/if}
			</div>

			<h3>Preview</h3>

			<div class="center">
				<div class="tiles">
					<Tile cardData={project} index={0} bind:openIndex />
				</div>
			</div>
		</div>

		<div class="column">
			<h2>Submit Project</h2>

			<div class="field">
				<label for="title">Title</label>
				<input type="text" id="title" name="title" bind:value={project.title} />
			</div>

			<div class="field">
				<label for="description">Description</label>
				<textarea id="description" name="description" rows="7" bind:value={project.description} />
			</div>

			<h3>Optional</h3>

			<div class="field">
				<label for="tldr">TLDR</label>
				<textarea id="tldr" name="tldr" rows="3" bind:value={project.tldr} />
			</div>

			<div class="field">
				<label for="followUrl">Follow Url</label>
				<input type="text" id="followUrl" name="followUrl" bind:value={project.followUrl} />
				<label for="featured">Featured</label>
				<input type="checkbox" id="featured" name="featured" bind:checked={project.featured} />
			</div>

			<div class="field">
				<label for="priority">Priority</label>
				<input type="number" id="priority" name="priority" bind:value={project.priority} />
				<label for="tags">tags</label>
				<select name="tags" id="tags" bind:value={tag} on:change={addTag}>
					{#each tagOptions as tagOptionItem}
						<option value={tagOptionItem}>{tagOptionItem}</option>
					{/each}
				</select>
			</div>

			{#if project.tags && project.tags.length > 0}
				<div class="tag-list">
					{#each project.tags as tagItem}
						<div class="tag">
							<div class="text">
								{tagItem}
							</div>
							<div class="remove clickable" on:click={(tag) => removeTag(tagItem)}>x</div>
						</div>
					{/each}
				</div>
			{/if}

			<div class="extra-media">
				<h3>Media URLs</h3>
				{#each project.media as link}
					<div class="field">
						<input type="text" id="media" name="media" bind:value={link} />
						<button
							class="remove-media"
							on:click={() => (project.media = project.media.filter((l) => l !== link))}
							>Remove</button
						>
					</div>
				{/each}

				<button class="add-media" on:click={addMedia}>Add Media</button>
			</div>

			<div class="field">
				<button class="submit" type="submit" on:click={submit}>Submit</button>
			</div>
		</div>
	</div>
</section>

<section>
	<PageCard cardData={project} />
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@use './admin.scss';
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;

		.column {
			width: 900px;

			&:first-child {
				margin-right: 100px;
				width: 400px;
			}

			.center {
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}

	.tag-list {
		display: flex;

		.tag {
			@include border-d;
			background-color: $accent;
			border-radius: 20vw;
			padding: 6px 15px;
			margin: 0px 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			font-weight: bold;

			.remove {
				margin-left: 10px;
			}
		}
	}
</style>
