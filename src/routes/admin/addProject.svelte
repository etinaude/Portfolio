<script lang="ts">
	import { addNewProject } from '$lib/services/firebase';
	import type { ProjectT } from '$lib/types/types';

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

	async function submit() {
		console.log(project);
		addNewProject(project);
	}
</script>

<section>
	<h1>Add Project</h1>
	<div class="field">
		<label for="title">Title</label>
		<input type="text" id="title" name="title" bind:value={project.title} />
	</div>
	<div class="field">
		<label for="description">Description</label>
			<h3>Preview</h3>

			<div class="center">
				<Card cardData={project} />
			</div>
			<p />

			<div class="center">
		<textarea id="description" name="description" bind:value={project.description} />
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

	<!-- <div class="field">
				<label for="tags">tags</label>
				<input type="text" id="tags" name="tags" />
			</div> -->

	<div class="field">
		<button class="submit" type="submit" on:click={submit}>Submit</button>
	</div>
</section>

<style lang="scss">
	@import './admin.scss';
</style>
