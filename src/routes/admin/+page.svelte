<script lang="ts">
	import { auth } from '$lib/services/firebase';
	import type { ProjectT } from '$lib/types/types';
	import { onMount } from 'svelte';

	let isAuth = false;
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

	async function submit() {
		console.log(project);
	}

	onMount(async () => {
		isAuth = await auth();
		console.log(isAuth);
	});
</script>

<svelte:head>
	<title>Etienne Naude - Admin</title>
	<meta name="description" content="Admin Page" />
</svelte:head>

{#if isAuth}
	<section>
		<h1>Add Project</h1>
		<div class="field">
			<label for="title">Title</label>
			<input type="text" id="title" name="title" bind:value={project.title} />
		</div>
		<div class="field">
			<label for="description">Description</label>
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
{:else}
	<h1>Please Authorise with Google</h1>
{/if}

<style lang="scss">
	@import './../../lib/styles/root.scss';

	h1 {
		margin-top: 100px;
	}

	.field {
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;
		min-height: 70px;
		align-content: center;
		align-items: center;

		label {
			width: 100px;
			text-align: right;
			margin-right: 20px;
		}

		input,
		textarea {
			@include border-d;
			background-color: $primary-xxl;
			padding: 20px;
			box-sizing: border-box;
			font-size: max(0.7vw, 20px);
			color: $light;

			&:focus {
				outline: 2px solid $accent;
				scale: 1.05;
			}

			&:hover {
				scale: 1.05;
			}
		}

		.submit {
			@include button;
			width: 100%;
		}
	}

	video,
	img {
		width: 300px;
		border-radius: 20px;
	}

	h3 {
		margin-top: 50px;
		text-align: center;
	}
</style>
