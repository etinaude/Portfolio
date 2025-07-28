<div class="loading" />

<style lang="scss">
	@use '$lib/styles/mixins.scss' as *;
	@use '$lib/styles/variables.scss' as *;

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
