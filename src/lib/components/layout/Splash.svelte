<div class="background">
	<div class="container">Welcome!</div>
	<div class="loading" />
</div>

<style lang="scss">
	@import './../../styles/root.scss';

	.background {
		@include flex-center;

		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $primary;
		z-index: 100;

		justify-content: center;
		pointer-events: none;

		animation: fade 0.5s ease-in-out forwards;
		animation-delay: 0.5s;
	}

	@keyframes fade {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.container {
		@include text-drop;

		align-items: center;
		justify-content: center;
		text-align: center;
		color: $accent;
		font-size: max(3rem, 6vw);
		font-weight: 600;
		margin-bottom: 2rem;
	}

	.loading {
		border: 15px solid $primary-xxl;
		border-top: 15px solid $accent;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			rotate: 0deg;
		}
		100% {
			rotate: 360deg;
		}
	}
</style>
