<script lang="ts">
  import Card from "$lib/components/project/Card.svelte";
  import LongCard from "$lib/components/project/Long-card.svelte";
  import ChanglingText from "$lib/components/Changling-text.svelte";
  import Showcase from "$lib/components/project/Showcase.svelte";

  import projectsImport from "$lib/data/projects.json";
  import educationImport from "$lib/data/education.json";
  import workImport from "$lib/data/work.json";
  import awardImport from "$lib/data/awards.json";
  import clubsImport from "$lib/data/clubs.json";

  import Contact from "$lib/components/Contact.svelte";
  import { onMount } from "svelte";
  import Saos from "saos";

  let isPhone = false;

  const projects = projectsImport.slice(0, 3);
  let image: HTMLElement;
  let heroImage = getHeroImage();

  onMount(async () => {
    image = document.getElementById("hero-pic")!;
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      isPhone = true;
    }
  });

  function getHeroImage(): string {
    if (isPhone) {
      return "images/me/portrait.webp";
    } else {
      return "images/me/thoughtful.webp";
    }
  }

  function mouseMove(event: any) {
    if (isPhone) return;
    const xPercent = event.clientX / image.clientWidth;
    const yPercent = event.clientY / image.clientHeight;

    // translate image
    image.style.transform = `translate(-${xPercent * 100}px, -${
      yPercent * 100
    }px)`;
  }
</script>

<svelte:head>
  <title>Etienne Naude</title>
</svelte:head>

<section id="base" on:mousemove={mouseMove}>
  <div class="hero-pic" id="hero-pic">
    <img src={heroImage} alt="background hero" />
  </div>
  <div class="blur" />

  <div class="header-text">
    <h1>Etienne Naude</h1>
    <ChanglingText />
  </div>
</section>

<section id="about" />

<section id="projects" class="sticky">
  <Showcase cardData={projects} />

  <div class="more-container">
    <a class="button more-projects-btn clickable" href="/projects">
      More Projects

      <svg class="arrow" viewBox="0 0 16 16"
        ><path
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        /></svg
      >
    </a>
  </div>
</section>

<section id="education">
  <Saos animation={"from-bottom 1s ease"}>
    <h2>Education</h2>
  </Saos>

  <div class="long-card-grid">
    {#each educationImport as education}
      <LongCard cardData={education} />
    {/each}
  </div>
</section>

<section id="clubs">
  <Saos animation={"from-bottom 1s ease"}>
    <h2>Associations</h2>
  </Saos>

  <div class="card-side-scroll">
    {#each clubsImport as award}
      <Card cardData={award} />
    {/each}
  </div>
</section>

<section id="work">
  <Saos animation={"from-bottom 1s ease"}>
    <h2>Current Work</h2>
  </Saos>

  <div class="long-card-grid">
    {#each workImport as work}
      <LongCard cardData={work} />
    {/each}
  </div>
</section>

<section id="awards">
  <Saos animation={"from-bottom 1s ease"}>
    <h2>Awards</h2>
  </Saos>

  <div class="card-side-scroll">
    {#each awardImport as award}
      <Card cardData={award} />
    {/each}
  </div>
</section>

<Contact />

<style lang="scss">
  @import "./index.scss";
</style>
