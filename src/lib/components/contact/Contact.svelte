<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import MailGun from '$lib/services/mailgunService';
	import { ContactFormT } from '$lib/types/types';
	import Saos from 'saos';
	import Links from '$lib/components/contact/LinksComp.svelte';
	import MiniProfile from '$lib/components/contact/MiniProfile.svelte';

	let form: ContactFormT = new ContactFormT();
	let banner: Banner;

	async function sendEmail() {
		const validate = MailGun.validateAll(form);

		banner.show('Sending', 'info');

		if (validate.valid) {
			await MailGun.sendEmail(form);
			banner.show('Sent! I look forward to talking with you.', 'success');

			form = {
				name: '',
				email: '',
				message: ''
			};
		} else {
			banner.show(validate.message, 'error');
		}
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

<Banner bind:this={banner} />

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
			@include button;

			width: 100%;
			margin: 0;
			font-size: 1rem;
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
