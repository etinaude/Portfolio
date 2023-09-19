<script lang="ts">
	import ChanglingText from '$lib/components/ChanglingText.svelte';
	import Device from 'svelte-device-info';

	import { onMount } from 'svelte';

	let image: HTMLElement;
	let heroImage = '';

	onMount(async () => {
		heroImage = getHeroImage();
		image = document.getElementById('hero-pic')!;
	});

	function getHeroImage(): string {
		if (Device.isMobile) {
			return 'images/me/portrait.webp';
		} else {
			return 'images/me/thoughtful.webp';
		}
	}

	function mouseMove(event: any) {
		if (Device.isMobile) return;
		const xPercent = event.clientX / image.clientWidth;
		const yPercent = event.clientY / image.clientHeight;

		// translate image
		image.style.transform = `translate(-${xPercent * 100}px, -${yPercent * 100}px)`;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions-->
<section id="base" on:mousemove={mouseMove}>
	<div class="hero-pic" id="hero-pic">
		<img src={heroImage} alt="background hero" />
	</div>

	<div class="header-text">
		<h1 class="name">Etienne Naude</h1>
		<ChanglingText />
	</div>
</section>

<style lang="scss">
	@import './../styles/root.scss';

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
			filter: drop-shadow(3px 5px 0 #151515);
		}
	}
</style>
