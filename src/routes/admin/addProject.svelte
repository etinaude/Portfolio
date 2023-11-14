<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Card from '$lib/components/project/Card.svelte';
	import Tile from '$lib/components/project/Tile.svelte';
	import { addNewProject, getProjectSingleData } from '$lib/services/firebase';
	import type { ProjectT } from '$lib/types/types';

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

	let project: ProjectT = {
		title: '',
		description: '',
		imageUrl: '',
		hoverImg: '',
		hoverVideo: '',
		followUrl: '',
		featured: false,
		tags: []
	};

	let tag: string = '';
	let banner: Banner;

	async function submit() {
		banner.show('Submitting', 'info');

		if (project.title === '') return banner.show('No Title', 'error');
		if (project.description === '') return banner.show('No Description', 'error');
		if (project.imageUrl === '') return banner.show('No Image Url', 'error');

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

		project.tags.push(tag);
		tag = '';

		// deep copy and remove duplicates
		project.tags = [...new Set(project.tags)];
	}

	async function search() {
		banner.show('searching', 'info');
		const foundProjects = (await getProjectSingleData(project.title)) as ProjectT[];
		if (foundProjects.length == 0) return banner.show('No project found', 'error');

		project = foundProjects[0];
	}

	async function removeTag(tag: string) {
		if (!project.tags) return;
		project.tags = project.tags.filter((t) => t !== tag);
	}
</script>

<section>
	<div class="row">
		<div class="column">
			<h2>Search project</h2>
			<div class="field">
				<label for="title">Title</label>
				<input type="text" id="title" name="title" bind:value={project.title} />
			</div>

			<div class="field">
				<button class="submit" type="submit" on:click={search}>search</button>
			</div>

			<h3>Preview</h3>

			<div class="center">
				<Card cardData={project} />
			</div>
			<p />

			<div class="center">
				<div class="tiles">
					<Tile cardData={project} />
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
				<textarea id="description" name="description" rows="5" bind:value={project.description} />
			</div>

			<div class="field">
				<label for="imageUrl">Image Url</label>
				<input type="text" id="imageUrl" name="imageUrl" bind:value={project.imageUrl} />
			</div>

			{#if project.imageUrl}
				<div class="image">
					<img src={project.imageUrl} alt={project.imageUrl} />
				</div>
			{/if}

			<h3>Optional</h3>

			<div class="field">
				<label for="hoverImg">Hover Img</label>
				<input type="text" id="hoverImg" name="hoverImg" bind:value={project.hoverImg} />
			</div>

			{#if project.hoverImg}
				<div class="image">
					<img src={project.hoverImg} alt={project.hoverImg} />
				</div>
			{/if}

			<div class="field">
				<label for="hoverVideo">Hover Video</label>
				<input type="text" id="hoverVideo" name="hoverVideo" bind:value={project.hoverVideo} />
			</div>

			<div class="field">
				<label for="followUrl">Follow Url</label>
				<input type="text" id="followUrl" name="followUrl" bind:value={project.followUrl} />
			</div>

			<div class="field">
				<label for="featured">Featured</label>
				<input type="checkbox" id="featured" name="featured" bind:value={project.featured} />
			</div>

			<div class="field">
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

			<div class="field">
				<button class="submit" type="submit" on:click={submit}>Submit</button>
			</div>
		</div>
	</div>
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@import './admin.scss';
</style>
