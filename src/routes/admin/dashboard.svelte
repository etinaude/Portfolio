<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import { getLinksData } from '$lib/services/firebase';
	import type { LinkT } from '$lib/types/types';
	import { onMount } from 'svelte';

	let allLinks: LinkT[] = [];
	let banner: Banner;

	onMount(async () => {
		allLinks = (await getLinksData()) as LinkT[];
		console.log(allLinks);
	});
</script>

<section>
	<div class="list">
		{#each allLinks as link}
			<a class="link-card clickable" href={link.url}>
				<div class="title">{link.title}</div>
				<div class="image">
					<img src={link.imageUrl} alt={link.imageUrl} />
				</div>
				<div class="description">{link.description}</div>
				<div class="url">{link.url}</div>
			</a>
		{/each}
	</div>
</section>

<Banner bind:this={banner} />

<style lang="scss">
	@use './admin.scss';
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	.link-card {
		@include border-d;
		width: 300px;

		background-color: $primary;
		border-radius: 10px;
		padding: 20px;
		margin: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: var(--color-text);

		.title {
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 10px;
		}

		.url {
			font-size: 0.8rem;
			margin-top: 10px;
			color: $accent;
		}

		.description {
			margin-bottom: 10px;
			text-align: center;
		}

		.image {
			display: flex;
			margin-bottom: 50px;
			justify-content: center;
			height: 300px;
			width: 300px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
