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
	<h1>Add Media</h1>

	<div class="field">
		<label for="description">File Name</label>
		<input id="fileName" name="fileName" bind:value={fileName} />
	</div>
	<p>Remember to start with "projects/" "logos/" "awards/" etc and end with a file extension</p>

	<div class="field">
		<label for="imageUrl">Image Url</label>
		<input type="file" id="imageUrl" name="imageUrl" on:change={(e) => preview(e)} />
	</div>

	<div class="image">
		<img src={previewSrc} alt={previewSrc} />
	</div>
	<button class="tabButton" on:click={uploadMedia}> Add File </button>

	{#if returnedFilePath}
		<div class="url">
			<a
				href={`https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/${returnedFilePath}?alt=media`}
				>https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/{returnedFilePath}?alt=media</a
			>
		</div>
	{/if}
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@import './admin.scss';
</style>
