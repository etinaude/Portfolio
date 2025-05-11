<script context="module" lang="ts">
	export const prerender = false;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	let words = [
		'Creative Technologist',
		'Nerd',
		'Roboticist',
		'Designer',
		'Tech Enthusiast',
		'Maker'
	];

	var textEl: HTMLElement;
	var wordIndex = 0;

	onMount(() => {
		textEl = document.querySelector('.change-text')!;
		setTimeout(deleteWord, 800);
	});

	function deleteWord() {
		const currentText = textEl.innerText;

		// if empty word add new one
		if (!currentText) {
			wordIndex++;
			if (wordIndex > words.length - 1) wordIndex = 0;
			setTimeout(addNextWord, 200);
			return;
		}

		// Remove a character
		textEl.innerText = currentText.substring(0, currentText.length - 1);

		setTimeout(deleteWord, 120);
	}

	function addNextWord() {
		const currentText = textEl.innerText;
		const currentLength = currentText.length;

		// if complete delete word.
		if (currentLength === words[wordIndex].length) {
			setTimeout(deleteWord, 1500);
			return;
		}

		// Add a character
		textEl.innerText = currentText + words[wordIndex].substring(currentLength, currentLength + 1);

		setTimeout(addNextWord, 180);
	}
</script>

<h2 class="change-text">Programmer</h2>

<style lang="scss">
	@use 'src/lib/styles/mixins.scss' as *;
	@use 'src/lib/styles/variables.scss' as *;

	.change-text {
		color: $light;
		text-align: center;
		margin-bottom: 100px;
	}

	@keyframes blinking {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		51% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	.change-text:after {
		content: '|';
		animation: blinking 1.2s infinite;
	}

	// mobile
	@media (max-width: 768px) {
		.change-text {
			font-size: 2rem;
		}
	}
</style>
