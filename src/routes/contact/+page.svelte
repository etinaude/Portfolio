<script lang="ts">
	import Contact from '$lib/components/contact/Contact.svelte';
</script>

<svelte:head>
	<title>Etienne Naude - Contact</title>
	<meta name="description" content="Etienne Naude Contact Details" />
</svelte:head>

<section>
	<Contact />
</section>

<style lang="scss">
	@import './../../lib/styles/root.scss';

	section {
		@include flex-center;
		padding-bottom: 0;
		--background: #222;
	}
</style>
