<script lang="ts">
	import { auth } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import AddMedia from './addMedia.svelte';
	import AddProject from './addProject.svelte';

	let isAuth = false;
	let tab: 'newProject' | 'editProject' | 'addFile' = 'newProject';

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
			class:active={tab === 'newProject'}
			on:click={() => (tab = 'newProject')}
		>
			Add Project
		</button>
		<button
			class="tabButton"
			class:active={tab === 'editProject'}
			on:click={() => (tab = 'editProject')}
		>
			Edit Project
		</button>
		<button class="tabButton" class:active={tab === 'addFile'} on:click={() => (tab = 'addFile')}>
			Add File
		</button>
	</div>

	{#if tab === 'newProject'}
		<AddProject />
	{/if}

	{#if tab === 'editProject'}
		<section>
			<h1>Edit Project</h1>
			<p>TODO :)</p>
		</section>
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
