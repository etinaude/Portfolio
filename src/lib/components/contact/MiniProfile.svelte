<script lang="ts">
	let showQR = false;

	function toggleQr() {
		showQR = !showQR;
	}
</script>

<div>
	<div class="profile" on:click={toggleQr}>
		<img alt="mini me" src="/images/me/black_profile.webp" />
	</div>

	<h2>Etienne Naude</h2>

	<div class="bio">
		🤖 Robots&emsp; 🖊️ Design<br />
		🍞 Bread! &emsp; 💻 Tech <br />
		🔒 Locks! &emsp; 🔦 Caves <br />
	</div>
</div>

{#if showQR}
	<div class="qr-cont" on:click={toggleQr}>
		<img class="qrcode" src="/images/qr.svg" alt="qr code" />

		<p>etinaude.dev/contact</p>
	</div>
{/if}

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

	h2 {
		text-align: center;
		margin-bottom: 30px;
	}

	.profile {
		@include flex-center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
			object-fit: cover;
			border: 2px solid $primary-xd;

			&:hover {
				rotate: 360deg;
			}

			transition: all 1s cubic-bezier(0.36, -0.62, 0.28, 1.89);
		}
	}
	.bio {
		@include flex-center;
		margin-bottom: 40px;
	}

	.qr-cont {
		@include flex-center;
		flex-direction: column;

		position: fixed;
		bottom: 0;
		right: 0;
		width: 100dvw;
		height: 100dvh;
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
