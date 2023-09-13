<script lang="ts">
	let showQR = false;

	function toggleQr() {
		showQR = !showQR;
	}
</script>

<div>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="profile" on:click={toggleQr}>
		<img alt="mini me" src="images/me/black_profile.webp" />
	</div>

	<h2>Etienne Naude</h2>
</div>

{#if showQR}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="qr-cont" on:click={toggleQr}>
		<img class="qrcode" src="images/qr.svg" alt="qr code" />

		<p>etinaude.dev/contact</p>
	</div>
{/if}

<style lang="scss">
	@import './../../styles/root.scss';

	h2 {
		text-align: center;
	}

	.profile {
		@include flex-center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
			object-fit: cover;
			border: 2px solid $primary-xd;
		}
	}

	.qr-cont {
		@include flex-center;
		flex-direction: column;

		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: $primary;
		z-index: 1000;

		p {
			color: $accent;
			font-size: 1.5rem;
			margin-top: 2rem;
			font-weight: bold;
		}

		.qrcode {
			width: 300px;
			height: 300px;
		}
	}
</style>
