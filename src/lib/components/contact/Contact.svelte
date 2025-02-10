<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Saos from 'saos';
	import Links from '$lib/components/contact/LinksComp.svelte';
	import MiniProfile from '$lib/components/contact/MiniProfile.svelte';

	let banner: Banner;
</script>

<div class="contacts">
	<div class="profile">
		<Saos animation={'from-left 1s ease'}>
			<MiniProfile />
		</Saos>
	</div>

	<Links />
</div>

<Banner bind:this={banner} />

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.contacts {
		--background: $primary;
		width: min(100%, 1200px);

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 0 10vw;
	}

	.mobile-profile {
		margin-top: 60px;
		display: none;
	}

	@media (max-width: 1024px) {
		.contacts {
			width: 100%;

			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			padding: 0 10vw;
			margin-bottom: 60px;
			margin-top: 100px;
		}

		.profile {
			padding-bottom: 30px;
		}
	}
</style>
