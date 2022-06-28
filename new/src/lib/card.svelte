<script lang="ts">
	import { spring } from 'svelte/motion';

	export let title: string;
	export let description: string;
	export let image_url: string;
</script>

<div class="card">
	<a href="/projects">
		<img src={image_url} alt="project" />

		<h3>{title}</h3>

		<caption>{description}</caption>

		<div class="read-more">read more →</div>
	</a>
</div>

<style>
	.card a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 250px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		background-color: #444;
		padding-bottom: 10px;
		text-decoration: none;
	}

	.card:hover {
		transform: scale(1.05);
	}

	h3 {
		color: #43d0ff;
		margin-bottom: 8px;
	}

	.read-more {
		margin-top: 3px;
		color: #bbb;
		font-size: 0.9em;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
