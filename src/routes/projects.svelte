<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  import projectsImport from "$lib/data/projects.json";
  import languageColors from "$lib/data/languages.json";
  import githubBackup from "$lib/data/backupdata.json";

  import Repo from "$lib/Repo.svelte";

  const largeProjects = projectsImport.slice(0, 6);
  const smallProjects = projectsImport.slice(6);
  let gitHubRepos = githubBackup.repos;
  let gitHubUser = githubBackup.profile;

  onMount(() => {
    const elements = document.querySelectorAll(".tilt");

    VanillaTilt.init(elements, { glare: true });
  });

  async function loadGithub() {
    fetch("https://api.github.com/users/etinaude")
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => {
        if (data) {
          gitHubUser = data;
        }
      });

    fetch(
      "https://api.github.com/users/etinaude/repos?sort=updated&per_page=80"
    )
      .then((response) => (response.status === 200 ? response.json() : null))
      .then((data) => {
        if (!data) return;

        // sort by stars
        data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);

        gitHubRepos = data.slice(0, 6);
        gitHubRepos.forEach((repo: any) => {
          repo.languageColor = languageColors[repo.language];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadGithub();
  // loadInsta();
</script>

<svelte:head>
  <title>Etienne Naude</title>
  <meta name="description" content="Etienne Naude projects" />
</svelte:head>

<section id="projects">
  {#if gitHubUser}
    <h2>GitHub</h2>

    <a
      href={gitHubUser.html_url}
      target="_blank"
      rel="noopener"
      class="github-profile"
    >
      <div class="img">
        <img src={gitHubUser.avatar_url} alt="project" />
      </div>

      <div class="bio">
        <div class="row">
          <div class="github-text">github.com/</div>

          <div>
            {gitHubUser.following} Following
          </div>
        </div>
        <div class="row">
          <h3>{gitHubUser.login}</h3>

          <div>
            {gitHubUser.followers} Followers
          </div>
        </div>

        <caption>{gitHubUser.bio}</caption>
      </div>
    </a>

    <div class="repo-list">
      {#each gitHubRepos as repo}
        <Repo {repo} />
      {/each}
    </div>
  {/if}

  <h2>Featured Projects</h2>

  <div class="flex-row">
    {#each largeProjects as project}
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

  <h2>More Projects</h2>

  <div class="flex-row">
    {#each smallProjects as project}
      <Card
        title={project.title}
        description={project.description}
        image_url={project.image_url}
        hover_img={project.hover_img}
        hover_video={project.hover_video}
        follow_url={project.follow_url}
        small="true"
      />
    {/each}
  </div>
</section>

<style lang="scss">
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
  }

  // Mobile
  @media (max-width: 700px) {
    section {
      padding: 3em;
    }

    h2 {
      margin-top: 2em;
    }
  }
</style>
