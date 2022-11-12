<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Card from "$lib/components/project/Card.svelte";
  import Tile from "$lib/components/project/Tile.svelte";

  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  import projectsImport from "$lib/data/projects.json";
  import languageColors from "$lib/data/languages.json";
  import githubBackup from "$lib/data/backupdata.json";

  import Repo from "$lib/components/project/Repo.svelte";
  import type { ProjectT } from "$lib/types/types";

  const largeProjects: ProjectT[] = projectsImport.slice(0, 6);
  const smallProjects: ProjectT[] = projectsImport.slice(6);

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

  // loadGithub();
</script>

<svelte:head>
  <title>Etienne Naude</title>
  <meta name="description" content="Etienne Naude projects" />
</svelte:head>

<section>
  {#if gitHubUser}
    <h2>GitHub</h2>

    <!-- svelte-ignore security-anchor-rel-noreferrer -->
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
</section>

<section>
  <h2>Featured Projects</h2>

  <div class="card-row">
    {#each largeProjects as project}
      <Card cardData={project} />
    {/each}
  </div>

  <h2>More Projects</h2>
  <div class="tiles">
    {#each smallProjects as project}
      <Tile cardData={project} />
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    padding-bottom: 20vh;
    margin: auto;
    position: relative;
    top: 0;
  }

  #projects {
    padding-bottom: 5vh;
    min-height: auto;
  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    margin-bottom: 2em;
  }

  h2 {
    margin-top: 2em;
  }

  .repo-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .github-profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2em;

    * {
      cursor: pointer;
    }

    .img {
      width: max(100px, 10vw);
      border-radius: 50%;
      margin-right: 1em;

      img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 50%;
      }

      transition: all 1s cubic-bezier(0.36, -0.62, 0.28, 1.89);

      &:hover {
        rotate: 360deg;
      }
    }

    .bio {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 750px;
      text-align: left;
      margin-bottom: 20px;

      .github-text {
        color: grey;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        h3 {
          margin-top: 0;
        }
      }

      caption {
        font-size: 1em;
        text-align: left;
      }
    }

    &:hover {
      h3,
      .github-text {
        color: var(--accent-tint-color);
      }
    }
  }

  // Mobile
  @media (max-width: 768px) {
    .repo-list {
      grid-template-columns: 1fr;
      margin: 20px;
    }

    .github-profile {
      flex-direction: column;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;

      .img {
        margin-bottom: 1em;
      }
    }

    section {
      padding-bottom: 0;
    }
  }
</style>
