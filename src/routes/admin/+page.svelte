<script lang="ts">
	import { auth } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import AddMedia from './addMedia.svelte';
	import AddProject from './addProject.svelte';

	let isAuth = false;
	let tab: 'editProject' | 'addFile' = 'editProject';

	onMount(async () => {
		isAuth = await auth();
	});
</script>

<svelte:head>
	<title>Etienne Naude - Admin</title>
	<meta name="description" content="Admin Page" />
</svelte:head>

{#if isAuth}
	<div class="tabButtons">
		<button
			class="tabButton"
			class:active={tab === 'editProject'}
			on:click={() => (tab = 'editProject')}
		>
			Project
		</button>
		<button class="tabButton" class:active={tab === 'addFile'} on:click={() => (tab = 'addFile')}>
			Add File
		</button>
	</div>

	{#if tab === 'editProject'}
		<AddProject />
	{/if}

	{#if tab === 'addFile'}
		<AddMedia />
	{/if}
{:else}
	<h1>Please Authorise with Google</h1>
{/if}

<style lang="scss">
	@import './admin.scss';
</style>
