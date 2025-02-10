<script lang="ts">
	import { auth } from '$lib/services/firebase';
	import { onMount } from 'svelte';
	import AddMedia from './addMedia.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import EditProject from './editProject.svelte';
	import Dashboard from './dashboard.svelte';

	let isAuth = false;
	let tab: 'editProject' | 'addFile' | 'dashboard' = 'editProject';
	let banner: Banner;

	onMount(async () => {
		banner.show('Please Authorise', 'info');
		isAuth = await auth();
		if (!isAuth) return banner.show('Unauthorised', 'error');
		banner.show('Authorised', 'success');
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

		<button
			class="tabButton"
			class:active={tab === 'dashboard'}
			on:click={() => (tab = 'dashboard')}
		>
			Dashboard
		</button>
	</div>

	{#if tab === 'editProject'}
		<EditProject />
	{/if}

	{#if tab === 'addFile'}
		<AddMedia />
	{/if}

	{#if tab === 'dashboard'}
		<Dashboard />
	{/if}
{:else}
	<h1>Please Authorise with Google</h1>
{/if}

<Banner bind:this={banner} />

<style lang="scss">
	@use './admin.scss';
</style>
