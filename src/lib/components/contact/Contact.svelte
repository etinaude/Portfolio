<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import MailGun from '$lib/services/mailgunService';
	import { BannerT, ContactFormT } from '$lib/types/types';
	import Saos from 'saos';
	import Links from '$lib/components/contact/LinksComp.svelte';
	import MiniProfile from '$lib/components/contact/MiniProfile.svelte';

	let bannerInfo: BannerT = new BannerT();
	let form: ContactFormT = new ContactFormT();

	async function sendEmail() {
		const validate = MailGun.validateAll(form);

		bannerInfo = {
			style: 'loading',
			text: 'sending',
			display: true
		};

		if (validate.valid) {
			await MailGun.sendEmail(form);
			bannerInfo = {
				style: 'success',
				text: 'Sent! I look forward to talking with you.',
				display: true
			};

			form = {
				name: '',
				email: '',
				message: ''
			};
		} else {
			bannerInfo = {
				style: 'error',
				text: validate.message,
				display: true
			};
		}

		setTimeout(() => {
			bannerInfo.display = false;
		}, 3000);
	}
</script>

<div class="contacts">
	<div class="form" id="form">
		<Saos animation={'from-left 1s ease'}>
			<MiniProfile />
			<div class="row">
				<input
					type="text"
					name="name"
					placeholder="name"
					bind:value={form.name}
					class="clickable"
				/>
				<input
					type="email"
					name="email"
					placeholder="email"
					bind:value={form.email}
					class="clickable"
				/>
			</div>

			<textarea name="message" placeholder="message" bind:value={form.message} class="clickable" />
			<button on:click={sendEmail} class="clickable"
				>Send
				<span class="material-symbol"> send </span>
			</button>
		</Saos>
	</div>

	<div>
		<div class="mobile-profile">
			<MiniProfile />
		</div>

		<Links />
	</div>
</div>

<Banner {bannerInfo} />

<style lang="scss">
	@import './../../styles/root.scss';

	.contacts {
		--background: #222;
		width: min(100%, 1200px);

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
		padding: 0 10vw;
	}

	.form {
		width: 500px;

		input,
		textarea {
			@include border-d;
			background-color: $primary-xxl;
			padding: 20px;
			box-sizing: border-box;
			font-size: max(0.7vw, 20px);
			color: $light;

			&:focus {
				outline: 2px solid $accent;
				scale: 1.05;
			}

			&:hover {
				scale: 1.05;
			}
		}

		.row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 0px;
		}

		textarea {
			resize: none;
			height: 200px;
			width: 100%;
			margin-top: 0px;
		}

		button {
			@include transition;
			@include border-d;
			@include flex-center;

			width: 100%;
			margin: 0;
			font-size: 1rem;
			text-transform: uppercase;
			margin-top: 10px;
		}
	}

	input {
		width: calc(50% - 10px);
		margin-bottom: 20px;

		&:first-child {
			margin-right: 20px;
		}
	}

	.mobile-profile {
		margin-top: 60px;
		display: none;
	}

	@media (max-width: 1024px) {
		.contact-row {
			margin-top: 80px;
		}

		.form {
			display: none;
		}

		.mobile-profile {
			display: block;
		}

		.contacts {
			margin-bottom: 60px;
		}
	}
</style>
