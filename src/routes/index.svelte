<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/card.svelte";
  import LongCard from "$lib/long-card.svelte";
  import ChanglingText from "$lib/changling-text.svelte";
  import projectsImport from "$lib/projects.json";

  const projects = projectsImport.slice(0, 3);
</script>

<svelte:head>
  <title>Etienne Naude</title>
</svelte:head>

<section id="about">
  <div class="header-text">
    <h1>Etienne Naude</h1>
    <ChanglingText />
  </div>
</section>

<section id="projects">
  <div class="wave">
    <svg viewBox="0 0 1440 180"
      ><path
        d="M0,36L30,48C60,60,120,84,180,84C240,84,300,60,360,54C420,48,480,60,540,57C600,54,660,36,720,24C780,12,840,6,900,24C960,42,1020,84,1080,96C1140,108,1200,90,1260,93C1320,96,1380,120,1440,117C1500,114,1560,84,1620,87C1680,90,1740,126,1800,141C1860,156,1920,150,1980,126C2040,102,2100,60,2160,60C2220,60,2280,102,2340,111C2400,120,2460,96,2520,99C2580,102,2640,132,2700,144C2760,156,2820,150,2880,126C2940,102,3000,60,3060,36C3120,12,3180,6,3240,9C3300,12,3360,24,3420,36C3480,48,3540,60,3600,72C3660,84,3720,96,3780,111C3840,126,3900,144,3960,141C4020,138,4080,114,4140,108C4200,102,4260,114,4290,120L4320,126L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h2>Projects</h2>

  <div class="flex-row">
    {#each projects as project}
      <Card
        title={project.title}
        description={project.description}
        image_url={project.image_url}
        hover_img={project.hover_img}
        hover_video={project.hover_video}
        follow_url={project.follow_url}
      />
    {/each}
  </div>

  <a class="button more-projects-btn" href="/projects"> More Projects →</a>
</section>

<section id="education">
  <div class="wave">
    <svg viewBox="0 0 1440 180"
      ><path
        d="M0,0L30,12C60,24,120,48,180,63C240,78,300,84,360,78C420,72,480,54,540,57C600,60,660,84,720,93C780,102,840,96,900,84C960,72,1020,54,1080,54C1140,54,1200,72,1260,72C1320,72,1380,54,1440,45C1500,36,1560,36,1620,54C1680,72,1740,108,1800,105C1860,102,1920,60,1980,54C2040,48,2100,78,2160,81C2220,84,2280,60,2340,60C2400,60,2460,84,2520,81C2580,78,2640,48,2700,48C2760,48,2820,78,2880,78C2940,78,3000,48,3060,45C3120,42,3180,66,3240,69C3300,72,3360,54,3420,51C3480,48,3540,60,3600,54C3660,48,3720,24,3780,33C3840,42,3900,84,3960,90C4020,96,4080,66,4140,45C4200,24,4260,12,4290,6L4320,0L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>
  <h2>Education</h2>

  <div class="long-card-row">
    <LongCard
      title="Computer Science at University of Auckland"
      description="I am currently studying towards a Bachelor of Advanced Science
    (Honours) majoring in Computer Science. While completing my Computer
    Science degree I have been awarded <b
      >8 Outstanding Achievement awards</b
    > and was <b>top in class</b> for the undergraduate capstone project. I
    was also selected to join the <b>Science Scholars</b> cohort."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/science_qxklbd.webp"
    />

    <LongCard
      title="Design at University of Auckland"
      side="right"
      description=" I am also completing a conjoint degree in a Bachelor of Design
    focussing on designing with
    <b>disruptive technologies</b>. My aim is to use the knowledge from my
    design degree to bridge the gap between the technical and aesthetic
    aspects of my projects. I was awarded with a <b>Design Scholarship</b>
    by the university in 2021."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592569/logos/cai_a3qplk.webp"
    />

    <LongCard
      title="Additive Manufacturing at University of Auckland"
      description="My Honours Project is with the Department of Mechanical Engineering
      researching <b>non-planar ironing</b> in FDM 3d printing. Building on previous
      work we have been able to successfully combine two prior techniques to
      create a novel process to smooth surface finishes on FDM prints and reduce
      post processing."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/engineering_aykfct.webp"
    />
  </div>
</section>

<section id="work">
  <div class="wave">
    <svg viewBox="0 0 1440 180"
      ><path
        d="M0,162L30,159C60,156,120,150,180,138C240,126,300,108,360,105C420,102,480,114,540,123C600,132,660,138,720,126C780,114,840,84,900,72C960,60,1020,66,1080,84C1140,102,1200,132,1260,126C1320,120,1380,78,1440,60C1500,42,1560,48,1620,54C1680,60,1740,66,1800,78C1860,90,1920,108,1980,114C2040,120,2100,114,2160,120C2220,126,2280,144,2340,138C2400,132,2460,102,2520,96C2580,90,2640,108,2700,102C2760,96,2820,66,2880,72C2940,78,3000,120,3060,117C3120,114,3180,66,3240,39C3300,12,3360,6,3420,15C3480,24,3540,48,3600,69C3660,90,3720,108,3780,117C3840,126,3900,126,3960,123C4020,120,4080,114,4140,99C4200,84,4260,60,4290,48L4320,36L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h2>Current Work</h2>

  <div class="long-card-row">
    <LongCard
      title="UoA Faculty of Medical Heath Sciences logo"
      description="While working at this role I focussed on <b>mobile app development</b>
  using <b>Ionic</b>
  Framework. In this role I was the primary developer for
  <b>Headstrong Messenger</b> <img which is a chatbot application designed to
  help teens and young adults struggling with depression and anxiety build
  healthy habits."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/fmhs_h8upx2.webp"
    />

    <LongCard
      title="Fullstack developer and designer at Kekeno Tech"
      side="right"
      description=" At Kekeno Tech I am a fullstack developer and designer working mainly
    to create web applications for clients around New Zealand. The primary
    technologies used for this role is <b>Angular</b>, <b>Flask</b> and
    <b>Firebase</b>. On top of this I also often
    <b>design webpages</b> or modify existing designs to fit the needs of the
    client."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/kekeno_rbrnha.webp"
    />

    <LongCard
      title="Robotics Research at University of Auckland"
      description="I am employed by the Department of Mechatronics to create a system
  allowing children to interact with robots and provide the robots
  instructions using a novel <b>tangible programming language</b>. This
  enables them to programme the robots using cards before they are even
  able to use a computer. The research is in using this system as an
  education tool and exploring how children interact with robots. For
  this project I am making the <b>computer vision</b>
  system, the <b>data server</b>, and the <b>interface</b> to explore all
  the data which has been collected."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/engineering_aykfct.webp"
    />

    <LongCard
      title="Lead Creative Technologist at Unleash Space"
      side="right"
      description="As A Creative Technologist I consult with students and staff members
    to create and design a wide range projects using the latest creative
    technologies. This is done by providing trainings on how each
    technology is used, when to use it and what its limitations are I also
    provide advice individually to people who need further information on
    prototyping. Some of the technologies I provide advice for are <b
      >3D printing</b
    >,
    <b>laser cutting</b>, <b>5G</b>, <b>VR/AR</b>, <b>soldering</b> and
    <b>CNC routing</b>. The projects which I help prototype for"
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592568/logos/unleash_zkdz7d.webp"
    />
  </div>
</section>

<section id="awards">
  <div class="wave">
    <svg viewBox="0 0 1440 180"
      ><path
        d="M0,36L30,48C60,60,120,84,180,99C240,114,300,120,360,108C420,96,480,66,540,54C600,42,660,48,720,69C780,90,840,126,900,120C960,114,1020,66,1080,45C1140,24,1200,30,1260,42C1320,54,1380,72,1440,90C1500,108,1560,126,1620,117C1680,108,1740,72,1800,75C1860,78,1920,120,1980,120C2040,120,2100,78,2160,69C2220,60,2280,84,2340,84C2400,84,2460,60,2520,63C2580,66,2640,96,2700,108C2760,120,2820,114,2880,108C2940,102,3000,96,3060,93C3120,90,3180,90,3240,102C3300,114,3360,138,3420,141C3480,144,3540,126,3600,123C3660,120,3720,132,3780,132C3840,132,3900,120,3960,105C4020,90,4080,72,4140,72C4200,72,4260,90,4290,99L4320,108L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h2>Awards</h2>

  <div class="flex-row">
    <Card
      title="Hannah-Bradshaw Award"
      description="I was awarded this for 4 years of consistent volunteer work in different fields."
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592543/awards/bradshawImg_yy5b2p.webp"
      follow_url="https://www.macleans.school.nz/news/cup-winners-at-senior-prizegiving-2018"
    />

    <Card
      title="Queen's Scout Award"
      description="I was one of the recipients of the Queen's Scout Award, this is the highest youth scouting honour, which was awarded to me for continuous work and commitment to scouting for 10 years"
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592543/awards/qsImg_rsqthc.webp"
      follow_url="https://scouts.nz/queens-scout-ceremony-2021/"
    />

    <Card
      title="Distinguished Graduate"
      description="I was awarded the 2020 Distinguished Graduate Award for engagement and leadership in a wide range extra curricular activities"
      image_url="https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_360,h_360/v1656592544/awards/distgradImg_g2ork3.webp"
      follow_url="https://www.auckland.ac.nz/en/on-campus/life-on-campus/leadership-and-volunteering/co-curricular-recognition-programme/ccr-programme-awards/university-of-auckland-award.html"
    />
  </div>
</section>

<section id="cta">
  <div class="wave">
    <svg viewBox="0 0 1440 180"
      ><path
        d="M0,72L30,72C60,72,120,72,180,72C240,72,300,72,360,84C420,96,480,120,540,114C600,108,660,72,720,63C780,54,840,72,900,90C960,108,1020,126,1080,123C1140,120,1200,96,1260,81C1320,66,1380,60,1440,69C1500,78,1560,102,1620,105C1680,108,1740,90,1800,93C1860,96,1920,120,1980,120C2040,120,2100,96,2160,93C2220,90,2280,108,2340,114C2400,120,2460,114,2520,96C2580,78,2640,48,2700,54C2760,60,2820,102,2880,120C2940,138,3000,132,3060,120C3120,108,3180,90,3240,84C3300,78,3360,84,3420,93C3480,102,3540,114,3600,105C3660,96,3720,66,3780,66C3840,66,3900,96,3960,102C4020,108,4080,90,4140,84C4200,78,4260,84,4290,87L4320,90L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h1>Contact Me</h1>

  <div class="contacts">
    <p>
      Email: <a href="mailto:eti@naude.dev">eti@naude.dev</a>
    </p>

    <p>
      Linked In: <a href="https://www.linkedin.com/in/etinaude/"
        >linkedin.com/in/etinaude</a
      >
    </p>

    <p>
      Github: <a href="https://www.github.com/etinaude">github.com/etinaude</a>
    </p>
  </div>
</section>

<style lang="scss">
  section {
    &#projects {
      --background: #333;

      .more-projects-btn {
        margin-top: 4rem;
        margin-bottom: 5em;
        width: 300px;
        text-align: center;
        padding: 20px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
      }
    }

    &#education {
      --background: #3c3c3c;
    }

    &#work {
      --background: #4a4a4a;

      @media (max-height: 1100px) {
        top: -20vh;
        padding-bottom: 10vh;
      }

      @media (max-width: 700px) {
        top: 0vh;
        margin-bottom: 0vh;
      }
    }
    &#awards {
      --background: #3c3c3c;
    }

    &#cta {
      --background: #222;
      justify-content: center;

      .contacts {
        font-size: 1.5em;
      }
    }

    &#about {
      width: 100%;
      height: 100vh;
      padding: 0;
      background-image: url(https://res.cloudinary.com/etienne-naude/image/upload/q_100,e_grayscale/v1656592580/me/thoughtfulImg_qd1fsv.webp);
      background-position: center;
      background-size: cover;

      .header-text {
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        padding-top: 25vh;
        text-align: center;
        /* backdrop-filter: blur(2px); */
        background-color: #2225;
        h1 {
          margin: 0px;
        }
      }
    }
  }

  .wave {
    position: absolute;
    width: 100%;
    top: 0;
    transform: translate(0, calc(-100% + 6px));
    svg {
      filter: drop-shadow(0px -12px 4px #2222);

      path {
        fill: var(--background);
      }
    }
  }
</style>
