<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import Card from '$lib/card.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const elements = document.querySelectorAll('.tilt');

		console.log(elements);

		VanillaTilt.init(elements, { glare: true });
	});
</script>

<svelte:head>
	<title>Etienne Naude</title>
	<meta name="description" content="Etienne Naude about page" />
</svelte:head>

<section id="about">
	<div class="header-text">
		<h1>Etienne Naude</h1>
		<h2>Tech Enthusaist</h2>
		<!-- CHANGING TAG LINE -->

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque fugiat quia
			vero ex nesciunt vel officiis harum suscipit tempore repellat voluptates assumenda quae totam
			quidem libero, fuga laboriosam dolor exercitationem rerum saepe. Culpa autem nihil
			perspiciatis quo laudantium ullam iste odio blanditiis provident. Ad, quas laborum! Corporis,
			minus nulla.
		</p>
	</div>
</section>

<section id="projects">
	<div class="waves">
		<svg viewBox="0 0 1440 190">
			><path
				d="M0,38L34.3,53.8C68.6,70,137,101,206,104.5C274.3,108,343,82,411,60.2C480,38,549,19,617,19C685.7,19,754,38,823,60.2C891.4,82,960,108,1029,101.3C1097.1,95,1166,57,1234,44.3C1302.9,32,1371,44,1440,50.7C1508.6,57,1577,57,1646,60.2C1714.3,63,1783,70,1851,88.7C1920,108,1989,139,2057,136.2C2125.7,133,2194,95,2263,88.7C2331.4,82,2400,108,2469,98.2C2537.1,89,2606,44,2674,44.3C2742.9,44,2811,89,2880,110.8C2948.6,133,3017,133,3086,129.8C3154.3,127,3223,120,3291,101.3C3360,82,3429,51,3497,41.2C3565.7,32,3634,44,3703,53.8C3771.4,63,3840,70,3909,60.2C3977.1,51,4046,25,4114,28.5C4182.9,32,4251,63,4320,82.3C4388.6,101,4457,108,4526,117.2C4594.3,127,4663,139,4731,120.3C4800,101,4869,51,4903,25.3L4937.1,0L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
	<h2>Projects</h2>
	<div class="flex-row">
		<Card
			title="WOW"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			title="WOW"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>

		<Card
			title="WOW"
			description="Wirelessly controlled automated zen garden"
			image_url="https://res.cloudinary.com/etienne-naude/image/upload/v1624939827/portfolio/sandtableImg.jpg"
		/>
	</div>

	<a class="button more-projects" href="/projects"> More Projects →</a>
</section>

<section id="education">
	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
	<h2>Education</h2>
	<div class="flex-row">
		<div class="education-card">
			<img
				alt="UoA Science"
				src="https://res.cloudinary.com/etienne-naude/image/upload/v1655021200/logos/science.png"
			/>
			<div>
				<h3>Computer Science at University of Auckland</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt alias
					dignissimos, dolor ab, sit debitis, culpa mollitia est consequuntur laborum exercitationem
					temporibus. Minus sed ipsa nobis cumque ab molestiae ea aliquam maxime molestias deleniti
					dicta, corrupti soluta eaque laudantium laborum delectus tenetur voluptate fuga est.
					Voluptatibus perferendis sint debitis.
				</p>
			</div>
		</div>

		<div class="education-card right">
			<div>
				<h3>Design at University of Auckland</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt alias
					dignissimos, dolor ab, sit debitis, culpa mollitia est consequuntur laborum exercitationem
					temporibus. Minus sed ipsa nobis cumque ab molestiae ea aliquam maxime molestias deleniti
					dicta, corrupti soluta eaque laudantium laborum delectus tenetur voluptate fuga est.
					Voluptatibus perferendis sint debitis.
				</p>
			</div>

			<img
				alt="UoA Creative Arts and Industries"
				src="https://res.cloudinary.com/etienne-naude/image/upload/v1655021200/logos/cai.jpg"
			/>
		</div>

		<div class="education-card">
			<img
				alt="UoA Engineering"
				src="https://res.cloudinary.com/etienne-naude/image/upload/v1655021199/logos/engineering.png"
			/>
			<div>
				<h3>Engineering at University of Auckland</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt alias
					dignissimos, dolor ab, sit debitis, culpa mollitia est consequuntur laborum exercitationem
					temporibus. Minus sed ipsa nobis cumque ab molestiae ea aliquam maxime molestias deleniti
					dicta, corrupti soluta eaque laudantium laborum delectus tenetur voluptate fuga est.
					Voluptatibus perferendis sint debitis.
				</p>
			</div>
		</div>
	</div>

	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
</section>

<section id="work">
	<h2>Work</h2>

	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
</section>

<section id="awards">
	<h2>Awards</h2>

	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
</section>

<section id="hobbies">
	<h2>Hobbies</h2>

	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>
</section>

<section id="cta">
	<div class="waves">
		<svg viewBox="0 0 1440 190"
			><path
				d="M0,95L34.3,82.3C68.6,70,137,44,206,41.2C274.3,38,343,57,411,79.2C480,101,549,127,617,133C685.7,139,754,127,823,114C891.4,101,960,89,1029,82.3C1097.1,76,1166,76,1234,85.5C1302.9,95,1371,114,1440,101.3C1508.6,89,1577,44,1646,25.3C1714.3,6,1783,13,1851,22.2C1920,32,1989,44,2057,63.3C2125.7,82,2194,108,2263,114C2331.4,120,2400,108,2469,91.8C2537.1,76,2606,57,2674,44.3C2742.9,32,2811,25,2880,31.7C2948.6,38,3017,57,3086,66.5C3154.3,76,3223,76,3291,69.7C3360,63,3429,51,3497,50.7C3565.7,51,3634,63,3703,79.2C3771.4,95,3840,114,3909,123.5C3977.1,133,4046,133,4114,117.2C4182.9,101,4251,70,4320,53.8C4388.6,38,4457,38,4526,38C4594.3,38,4663,38,4731,50.7C4800,63,4869,89,4903,101.3L4937.1,114L4937.1,190L4902.9,190C4868.6,190,4800,190,4731,190C4662.9,190,4594,190,4526,190C4457.1,190,4389,190,4320,190C4251.4,190,4183,190,4114,190C4045.7,190,3977,190,3909,190C3840,190,3771,190,3703,190C3634.3,190,3566,190,3497,190C3428.6,190,3360,190,3291,190C3222.9,190,3154,190,3086,190C3017.1,190,2949,190,2880,190C2811.4,190,2743,190,2674,190C2605.7,190,2537,190,2469,190C2400,190,2331,190,2263,190C2194.3,190,2126,190,2057,190C1988.6,190,1920,190,1851,190C1782.9,190,1714,190,1646,190C1577.1,190,1509,190,1440,190C1371.4,190,1303,190,1234,190C1165.7,190,1097,190,1029,190C960,190,891,190,823,190C754.3,190,686,190,617,190C548.6,190,480,190,411,190C342.9,190,274,190,206,190C137.1,190,69,190,34,190L0,190Z"
			/></svg
		>
	</div>

	<h1>Contact Me</h1>

	<div class="contacts">
		<p>
			Email: <a href="mailto:eti@naude.dev">eti@naude.dev</a>
		</p>

		<p>
			Linked In: <a href="https://www.linkedin.com/in/etinaude/">linkedin.com/in/etinaude</a>
		</p>

		<p>
			Github: <a href="https://www.github.com/etinaude">github.com/etinaude</a>
		</p>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		box-sizing: border-box;
		padding: 0 5rem;
		padding-bottom: 20vh;
		margin: auto;
		position: sticky;
		top: 0;
		background-color: var(--background);
	}

	.waves {
		position: absolute;
		width: 100%;
		top: 0;
		transform: translate(0, calc(-100% + 5px));
	}

	.waves svg {
		filter: drop-shadow(0px -12px 4px #2222);
	}

	path {
		fill: var(--background);
	}

	#projects {
		--background: #333;
	}

	#education {
		--background: #444;
	}

	#work {
		--background: #555;
	}

	#hobbies {
		--background: #444;
	}

	#awards {
		--background: #333;
	}

	#cta {
		--background: #222;
		justify-content: center;
	}

	.contacts {
		font-size: 1.5em;
	}

	h2 {
		margin-top: 3em;
	}

	#about {
		width: 100%;
		height: 100vh;
		padding: 0;
		background-image: url(https://res.cloudinary.com/etienne-naude/image/upload/e_grayscale/v1647210756/portfolio/thoughtfulImg.jpg);
	}

	.header-text {
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
		padding: 20%;
		padding-top: 15%;
		text-align: center;
		/* backdrop-filter: blur(2px); */
		background-color: #2225;
	}

	.header-text h1 {
		margin: 0px;
	}

	.header-text h2 {
		margin: 0.5em;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1200px;
	}

	.more-projects {
		margin-top: 4rem;
	}

	.education-card {
		display: flex;
		text-decoration: none;
		height: 180px;
		margin: 10px;
	}

	.education-card img {
		height: 100%;
		margin-right: 50px;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
	}

	.education-card.right img {
		margin-left: 50px;
		margin-right: 0;
	}
</style>
