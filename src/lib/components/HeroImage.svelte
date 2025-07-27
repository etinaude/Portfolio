<script lang="ts">
	import ChanglingText from '$lib/components/ChanglingText.svelte';
	import Device from 'svelte-device-info';
	import Saos from 'saos';

	import { onMount } from 'svelte';

	let image: HTMLElement;
	let heroImage = '';

	onMount(async () => {
		heroImage = getHeroImage();
		image = document.getElementById('hero-pic')!;
	});

	function getHeroImage(): string {
		let width = window.outerWidth;
		let height = window.outerHeight;

		let location = 'images/me/';

		// prefer landscape, only use portrait if substantially taller than wide
		if (Device.isPhone || width * 1.2 < height) {
			location += 'portrait/';
			if (width < 500) return location + 'portrait_500.webp';
			if (width < 750) return location + 'portrait_750.webp';
			return location + 'portrait.webp';
		} else {
			location += 'landscape/';
			if (width < 750) return location + 'landscape_750.webp';
			if (width < 1000) return location + 'landscape_1000.webp';
			if (width < 1500) return location + 'landscape_1500.webp';
			if (width < 2000) return location + 'landscape_2000.webp';
			if (width < 3000) return location + 'landscape_3000.webp';
			if (width < 4000) return location + 'landscape_4000.webp';
			return location + 'landscape.webp';
		}
	}

	function mouseMove(event: any) {
		if (Device.isMobile) return;
		const xPercent = event.clientX / image.clientWidth;
		const yPercent = event.clientY / image.clientHeight;

		// translate image
		image.style.transform = `translate(-${xPercent * 20}px, -${yPercent * 20}px)`;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions-->
<section id="base" on:mousemove={mouseMove}>
	<div class="hero-pic" id="hero-pic">
		<img src={heroImage} alt="background hero" />
	</div>

	<div class="header-text">
		<Saos animation={'from-bottom 1s ease'}>
			<h1 class="name">Etienne Naude</h1>

			<ChanglingText />
		</Saos>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	#base {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;

		background-color: $primary-t;
	}

	.hero-pic {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: $primary;
		z-index: -1;

		img {
			width: 110%;
			height: 110%;
			object-fit: cover;
			object-position: center;
		}
	}

	.header-text {
		padding-top: 25vh;

		.name {
			margin: 0px;
		}
	}

	// mobile
	@media (max-width: 768px) {
		.change-text {
			font-size: 2rem;
		}

		.header-text {
			position: absolute;
			bottom: 30px;
			text-align: right;
		}
	}
</style>
