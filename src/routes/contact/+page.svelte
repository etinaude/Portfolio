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
	<Contact />
</section>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	section {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
	}
</style>
