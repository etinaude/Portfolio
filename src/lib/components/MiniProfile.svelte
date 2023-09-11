<script lang="ts">
	let showQR = false;

	function toggleQr() {
		showQR = !showQR;
	}
</script>

<div>
	<div class="profile" on:click={toggleQr}>
		<img alt="mini me" src="images/me/black_profile.webp" />
	</div>

	<h2>Etienne Naude</h2>
</div>

{#if showQR}
	<div class="qr-cont" on:click={toggleQr}>
		<img class="qrcode" src="images/qr.svg" alt="qr code" />

		<p>etinaude.dev/contact</p>
	</div>
{/if}

<style lang="scss">
	@import '../styles/root.scss';

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

		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: $primary;
		z-index: 1;

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
