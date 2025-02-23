<script lang="ts">
	import { addNewImage } from '$lib/services/firebase';
	import Banner from '$lib/components/Banner.svelte';
	import imageCompression from 'browser-image-compression';
	import { ImageCrop } from '@novacbn/svelte-image-crop';

	let fileName: string = '';
	let initialSrc: string = '';
	let cropperSrc: string = '';

	let returnedFilePath: string = '';
	let banner: Banner;
	let image_crop: any;
	let blob: File | null;

	async function importImage(e: any) {
		if (!e) return;
		if (e.target.files.length == 0) return;
		if (e.target.files.length == 0) return;

		const file = e.target.files[0];
		blob = file;

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = async (e) => {
			initialSrc = e.target?.result as string;
			cropperSrc = e.target?.result as string;

			fileName = file.name;
			fileName = fileName.replace(/ /g, '_');
			fileName = fileName.replace(/[^a-zA-Z0-9.]/g, '');
			fileName = fileName.toLowerCase();
			fileName = fileName.replace(/\.[^/.]+$/, '.webp');
		};
	}

	async function convertToWebp(file: File) {
		try {
			banner.show('Converting to WEBP', 'info');

			const options = {
				maxSizeMB: 1,
				maxWidthOrHeight: 1900,
				useWebWorker: true,
				fileType: 'image/webp'
			};
			const image = await imageCompression(file, options);
			banner.show('Converted', 'success');

			return image;
		} catch (error) {
			banner.show('Error Converting', 'error');
			return null;
		}
	}

	async function uploadMedia() {
		banner.show('Uploading', 'info');
		if (cropperSrc == null || fileName == '' || blob === null)
			return banner.show('No File Selected', 'error');

		blob = await convertToWebp(blob);

		if (blob === null) return banner.show('Error Converting', 'error');

		returnedFilePath = await addNewImage(blob, fileName);
		if (returnedFilePath == '') return banner.show('Error Uploading', 'error');
		returnedFilePath = returnedFilePath.replace(/ /g, '%20');
		returnedFilePath = returnedFilePath.replace('projects/', 'projects%2F');
		returnedFilePath = returnedFilePath.replace('logos/', 'projlogosetcs%2F');
		returnedFilePath = returnedFilePath.replace('awards/', 'awards%2F');

		console.log(returnedFilePath);

		banner.show('File Uploaded', 'success');
	}

	async function on_commit_click(event: any) {
		blob = await image_crop.get_cropped_blob();
		cropperSrc = URL.createObjectURL(blob!);
		image_crop.reset();
	}

	function on_clear_click() {
		image_crop.reset();
	}

	function on_reset_click() {
		blob = null;
		cropperSrc = initialSrc;
		image_crop.reset();
	}
</script>

<section>
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
			<h2>Add Media</h2>

			<div class="field">
				<label for="description">File Name</label>
				<input id="fileName" name="fileName" bind:value={fileName} />
			</div>
			<p>Start with "projects/" "logos/" "awards/" etc and end with a file extension</p>

			<div class="field">
				<label for="imageUrl">Image Url</label>
				<input type="file" id="imageUrl" name="imageUrl" on:change={(e) => importImage(e)} />
			</div>

			<button class="tabButton" on:click={uploadMedia}> Upload </button>
		</div>

		<div class="image-cont">
			{#if cropperSrc}
				<div class="image">
					<ImageCrop bind:this={image_crop} src={cropperSrc} />
				</div>

				<button on:click={on_reset_click}> reset </button>

				<button on:click={on_clear_click}> clear </button>

				<button on:click={on_commit_click}> commit </button>
			{/if}
		</div>
	</div>
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@use './admin.scss';

	.grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;
	}

	.url {
		margin: 30px 0;
		font-size: 1.5em;
	}

	.image {
		width: 400px;
	}
</style>
