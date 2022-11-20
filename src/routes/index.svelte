<script lang="ts">
  import Card from "$lib/components/project/Card.svelte";
  import LongCard from "$lib/components/project/Long-card.svelte";
  import ChanglingText from "$lib/components/Changling-text.svelte";
  import Showcase from "$lib/components/project/Showcase.svelte";

  import projectsImport from "$lib/data/projects.json";
  import educationImport from "$lib/data/education.json";
  import workImport from "$lib/data/work.json";
  import awardImport from "$lib/data/awards.json";

  import Carousel from "svelte-carousel";
  import { browser } from "$app/env";
  import Contact from "$lib/components/Contact.svelte";
  import { onMount } from "svelte";
  import { urls } from "$lib/services/urls";

  let carousel;
  let isPhone = false;

  const projects = projectsImport.slice(0, 3);
  let image: HTMLElement;
  let heroImage =
    "https://res.cloudinary.com/etienne-naude/image/upload/q_70,e_grayscale,w_500,h_200/v1656592580/me/thoughtfulImg_qd1fsv.webp";

  onMount(async () => {
    image = document.getElementById("hero-pic")!;
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      isPhone = true;
    }

    heroImage = getHeroImage();
  });

  function getHeroImage() {
    const base = urls.noProps;
    const width = `w_${window.innerWidth}`;
    const height = `h_${window.innerHeight}`;
    const properties = `q_70,e_grayscale,c_crop,${width},${height}`;

    console.log(`${base}${properties}/me/thoughtfulImg_qd1fsv.webp`);

    if (isPhone) {
      return `${base}/${properties}/v1656592579/me/portraitImg_bejhx7.webp`;
    } else {
      return `${base}/${properties}/v1656592580/me/thoughtfulImg_qd1fsv.webp`;
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

    <a class="cta clickable" href="#cta"> Contact Me </a>
  </div>
</section>

<section id="about" />

<section id="projects" class="sticky">
  <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,36L30,48C60,60,120,84,180,84C240,84,300,60,360,54C420,48,480,60,540,57C600,54,660,36,720,24C780,12,840,6,900,24C960,42,1020,84,1080,96C1140,108,1200,90,1260,93C1320,96,1380,120,1440,117C1500,114,1560,84,1620,87C1680,90,1740,126,1800,141C1860,156,1920,150,1980,126C2040,102,2100,60,2160,60C2220,60,2280,102,2340,111C2400,120,2460,96,2520,99C2580,102,2640,132,2700,144C2760,156,2820,150,2880,126C2940,102,3000,60,3060,36C3120,12,3180,6,3240,9C3300,12,3360,24,3420,36C3480,48,3540,60,3600,72C3660,84,3720,96,3780,111C3840,126,3900,144,3960,141C4020,138,4080,114,4140,108C4200,102,4260,114,4290,120L4320,126L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  {#if browser}
    <Carousel
      bind:this={carousel}
      timingFunction="linear"
      autoplay
      autoplayDuration={5000}
      dots={false}
      arrows={false}
      swiping={false}
    >
      {#each projects as project}
        <Showcase cardData={project} />
      {/each}
    </Carousel>
  {/if}

  <div class="more-container">
    <a class="button more-projects-btn clickable" href="/projects">
      More Projects →</a
    >
  </div>
</section>

<section id="education">
  <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,0L30,12C60,24,120,48,180,63C240,78,300,84,360,78C420,72,480,54,540,57C600,60,660,84,720,93C780,102,840,96,900,84C960,72,1020,54,1080,54C1140,54,1200,72,1260,72C1320,72,1380,54,1440,45C1500,36,1560,36,1620,54C1680,72,1740,108,1800,105C1860,102,1920,60,1980,54C2040,48,2100,78,2160,81C2220,84,2280,60,2340,60C2400,60,2460,84,2520,81C2580,78,2640,48,2700,48C2760,48,2820,78,2880,78C2940,78,3000,48,3060,45C3120,42,3180,66,3240,69C3300,72,3360,54,3420,51C3480,48,3540,60,3600,54C3660,48,3720,24,3780,33C3840,42,3900,84,3960,90C4020,96,4080,66,4140,45C4200,24,4260,12,4290,6L4320,0L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>
  <h2>Education</h2>

  <div class="long-card-grid">
    {#each educationImport as education}
      <LongCard cardData={education} />
    {/each}
  </div>
</section>

<section id="work">
  <h2>Current Work</h2>

  <div class="long-card-grid">
    {#each workImport as work}
      <LongCard cardData={work} />
    {/each}
  </div>
</section>

<section id="awards">
  <h2>Awards</h2>

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
