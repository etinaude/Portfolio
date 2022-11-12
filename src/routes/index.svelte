<script context="module" lang="ts">
  export const prerender = false;
</script>

<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import LongCard from "$lib/components/long-card.svelte";
  import ChanglingText from "$lib/components/changling-text.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import Banner from "$lib/components/Banner.svelte";

  import projectsImport from "$lib/data/projects.json";
  import educationImport from "$lib/data/education.json";
  import workImport from "$lib/data/work.json";
  import awardImport from "$lib/data/awards.json";

  import { onMount } from "svelte";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/env";
  import MailGun from "$lib/services/mailgunService";
  let carousel;

  const projects = projectsImport.slice(0, 3);
  let image: HTMLElement;

  let bannerInfo = {
    style: "error",
    text: "",
    display: false,
  };

  let form = {
    name: "",
    email: "",
    message: "",
  };

  onMount(async () => {
    image = document.getElementById("hero-pic")!;
  });

  function mouseMove(event: any) {
    const x = event.clientX;
    const y = event.clientY;

    const width = image.clientWidth;
    const height = image.clientHeight;

    const xPercent = x / width;
    const yPercent = y / height;

    // translate image
    image.style.transform = `translate(-${xPercent * 100}px, -${
      yPercent * 100
    }px)`;
  }

  async function sendEmail() {
    console.log(form);
    const validate = MailGun.validateAll(form);

    bannerInfo = {
      style: "loading",
      text: "sending",
      display: true,
    };

    if (validate.valid) {
      await MailGun.sendEmail(form);
      bannerInfo = {
        style: "success",
        text: "Sent! I look forward to talking with you.",
        display: true,
      };

      form = {
        name: "",
        email: "",
        message: "",
      };
    } else {
      bannerInfo = {
        style: "error",
        text: validate.message,
        display: true,
      };
    }

    setTimeout(() => {
      bannerInfo.display = false;
    }, 3000);
  }
</script>

<svelte:head>
  <title>Etienne Naude</title>
</svelte:head>

<section class="base" on:mousemove={mouseMove}>
  <div class="hero-pic" id="hero-pic">
    <img
      src="https://res.cloudinary.com/etienne-naude/image/upload/q_100,e_grayscale/v1656592580/me/thoughtfulImg_qd1fsv.webp"
      alt="background hero"
    />
  </div>
  <div class="blur" />

  <div class="header-text">
    <h1>Etienne Naude</h1>
    <ChanglingText />

    <a class="cta" href="#cta"> Contact Me </a>
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

  <!-- <h2>Project Showcase</h2> -->

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
    <a class="button more-projects-btn" href="/projects"> More Projects →</a>
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

  <div class="long-card-row">
    {#each educationImport as education}
      <LongCard cardData={education} />
    {/each}
  </div>
</section>

<section id="work">
  <!-- <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,36L30,48C60,60,120,84,180,84C240,84,300,60,360,54C420,48,480,60,540,57C600,54,660,36,720,24C780,12,840,6,900,24C960,42,1020,84,1080,96C1140,108,1200,90,1260,93C1320,96,1380,120,1440,117C1500,114,1560,84,1620,87C1680,90,1740,126,1800,141C1860,156,1920,150,1980,126C2040,102,2100,60,2160,60C2220,60,2280,102,2340,111C2400,120,2460,96,2520,99C2580,102,2640,132,2700,144C2760,156,2820,150,2880,126C2940,102,3000,60,3060,36C3120,12,3180,6,3240,9C3300,12,3360,24,3420,36C3480,48,3540,60,3600,72C3660,84,3720,96,3780,111C3840,126,3900,144,3960,141C4020,138,4080,114,4140,108C4200,102,4260,114,4290,120L4320,126L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div> -->

  <h2>Current Work</h2>

  <div class="long-card-row">
    {#each workImport as work}
      <LongCard cardData={work} />
    {/each}
  </div>
</section>

<section id="awards" class="sticky">
  <!-- <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,36L30,48C60,60,120,84,180,99C240,114,300,120,360,108C420,96,480,66,540,54C600,42,660,48,720,69C780,90,840,126,900,120C960,114,1020,66,1080,45C1140,24,1200,30,1260,42C1320,54,1380,72,1440,90C1500,108,1560,126,1620,117C1680,108,1740,72,1800,75C1860,78,1920,120,1980,120C2040,120,2100,78,2160,69C2220,60,2280,84,2340,84C2400,84,2460,60,2520,63C2580,66,2640,96,2700,108C2760,120,2820,114,2880,108C2940,102,3000,96,3060,93C3120,90,3180,90,3240,102C3300,114,3360,138,3420,141C3480,144,3540,126,3600,123C3660,120,3720,132,3780,132C3840,132,3900,120,3960,105C4020,90,4080,72,4140,72C4200,72,4260,90,4290,99L4320,108L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div> -->

  <h2>Awards</h2>

  <div class="flex-row">
    {#each awardImport as award}
      <Card cardData={award} />
    {/each}
  </div>
</section>

<section id="cta">
  <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,72L30,72C60,72,120,72,180,72C240,72,300,72,360,84C420,96,480,120,540,114C600,108,660,72,720,63C780,54,840,72,900,90C960,108,1020,126,1080,123C1140,120,1200,96,1260,81C1320,66,1380,60,1440,69C1500,78,1560,102,1620,105C1680,108,1740,90,1800,93C1860,96,1920,120,1980,120C2040,120,2100,96,2160,93C2220,90,2280,108,2340,114C2400,120,2460,114,2520,96C2580,78,2640,48,2700,54C2760,60,2820,102,2880,120C2940,138,3000,132,3060,120C3120,108,3180,90,3240,84C3300,78,3360,84,3420,93C3480,102,3540,114,3600,105C3660,96,3720,66,3780,66C3840,66,3900,96,3960,102C4020,108,4080,90,4140,84C4200,78,4260,84,4290,87L4320,90L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h1>Contact Me</h1>

  <div class="contact-row">
    <div name="contact" class="form" id="form">
      <div class="row">
        <input
          type="text"
          name="name"
          bind:value={form.name}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          bind:value={form.email}
          placeholder="email"
        />
      </div>

      <textarea
        name="message"
        placeholder="message"
        bind:value={form.message}
      />
      <button on:click={sendEmail}>Send</button>
    </div>

    <div class="contacts">
      Or here:
      <p>
        Email: <a href="mailto:eti@naude.dev">eti@naude.dev</a>
      </p>

      <p>
        Linked In: <a href="https://www.linkedin.com/in/etinaude/"
          >linkedin.com/in/etinaude</a
        >
      </p>

      <p>
        Github: <a href="https://www.github.com/etinaude">github.com/etinaude</a
        >
      </p>
    </div>
  </div>
</section>

<Banner {bannerInfo} />
