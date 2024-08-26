<script lang="ts">
	import { addNewImage } from '$lib/services/firebase';
	import Banner from '$lib/components/Banner.svelte';

	let fileName: string = '';
	let previewSrc: string = '';
	let file: File;
	let returnedFilePath: string = '';
	let banner: Banner;

	async function preview(e: any) {
		if (!e) return;
		if (e.target.files.length == 0) return;
		if (e.target.files.length == 0) return;
		file = e.target.files[0];

		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			previewSrc = e.target?.result as string;
		};
	}

	async function uploadMedia() {
		banner.show('Uploading', 'info');
		if (previewSrc == null || fileName == '') return banner.show('No File Selected', 'error');

		returnedFilePath = await addNewImage(file, fileName);
		if (returnedFilePath == '') return banner.show('Error Uploading', 'error');

		banner.show('File Uploaded', 'success');
	}
</script>

<section>
	<h2>Add Media</h2>

	{#if returnedFilePath}
		<div class="url">
			<a
				href={`https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/${returnedFilePath}?alt=media`}
				>https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/{returnedFilePath}?alt=media</a
			>
		</div>
	{/if}

	<div class="grid">
		<div class="form">
			<div class="field">
				<label for="description">File Name</label>
				<input id="fileName" name="fileName" bind:value={fileName} />
			</div>
			<p>Start with "projects/" "logos/" "awards/" etc and end with a file extension</p>

			<div class="field">
				<label for="imageUrl">Image Url</label>
				<input type="file" id="imageUrl" name="imageUrl" on:change={(e) => preview(e)} />
			</div>

			<button class="tabButton" on:click={uploadMedia}> Add File </button>
		</div>

		<div class="image">
			<img src={previewSrc} alt={previewSrc} />
		</div>
	</div>
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@import './admin.scss';

	.grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;
	}

	.url {
		margin: 30px 0;
		font-size: 1.5em;
	}
</style>
