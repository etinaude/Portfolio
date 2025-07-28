<script lang="ts">
	import Contact from '$lib/components/contact/Contact.svelte';
	import Header from '$lib/components/layout/Header.svelte';
</script>

<svelte:head>
	<title>Etienne Naude | Contact</title>
	<meta name="description" content="Etienne Naude Contact Details" />
</svelte:head>

<Header />

<section>
	<h3>Hi Google Creative Labs!</h3>

	<iframe
		class="cv"
		src="Etienne-Naude-Google-Creative Labs-CV.pdf"
		width="800"
		scrolling="no"
		title="CV"
		style="overflow:hidden"
	/>
</section>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	section {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
		position: relative;
		display: flex;
	}

	h3 {
		font-size: 2rem;
		text-align: center;
		margin-top: 100px;
		margin-bottom: 100px;
	}

	.cv {
		width: 830px;
		height: 2350px;
		border: none;
	}
</style>
