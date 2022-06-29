<script lang="ts">
	export let title: string;
	export let description: string;
	export let image_url: string;
	export let hover_url: string = image_url;
	export let hover_video: boolean = false;
	export let small: string = 'false';

	export let follow_url: string = '/projects';
</script>

<div class="card tilt {small == 'true' ? 'small' : ''}" id="card">
	<a href={follow_url}>
		<img src={image_url} alt="project" />

		<h3>{title}</h3>

		<caption>{description}</caption>

		<div class="read-more">read more →</div>
	</a>
</div>

<style lang="scss">
	.card {
		width: 30%;
		margin-bottom: 60px;
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 2px #0000004d;
		background-color: #444;
		display: flex;
		text-align: center;
		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #fff;
			overflow: hidden;
			background-color: #444;
			text-decoration: none;
			height: 100%;
			padding-bottom: 20px;
			margin-bottom: auto;
			box-sizing: border-box;
		}
	}

	h3 {
		color: #43d0ff;
		margin-bottom: 8px;
	}

	caption {
		padding: 0px 30px;
	}

	.read-more {
		margin-top: 10px;
		color: #bbb;
		font-size: 0.9em;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.card.small {
		width: 15%;
		.read-more {
			display: none;
		}

		h3 {
			color: #43d0ff;
			margin-bottom: 8px;
			font-size: 1.2em;
		}

		caption {
			padding: 0px 10px;
		}
	}
</style>
