<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Etienne Naude | Portfolio</title>
	<meta name="description" content="Etienne Naude Portfolio" />
</svelte:head>

<section>
	<h2>Oops!</h2>
	<h3>{page.status} {page.error?.message || 'Unknown error'}</h3>

	<hr />

	<button class="button" on:click={() => goto('/')}>
		Home
		<span class="material-symbol"> home </span>
	</button>
</section>

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	h2,
	h3 {
		text-align: center;
	}

	section {
		@include flex-center;
		flex-direction: column;
		height: 90vh;
		width: 100vw;
	}

	h2 {
		margin-bottom: 0.2em;
	}

	hr {
		margin: 60px auto;
		width: 50%;
		border-color: $primary;
		border-width: 1px;
		border-style: solid;
	}

	button {
		display: block;
		font-size: 1.5em;
		margin: 0 auto;
		padding: 30px;
		margin-top: 30px;
		background-color: $accent;
		color: $primary;
	}

	.material-symbol {
		vertical-align: top;
		margin-left: 0.5rem;
	}
</style>
