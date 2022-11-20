<script lang="ts">
  import type { ProjectT } from "$lib/types/types";
  import { urls } from "$lib/services/urls";
  import { onMount } from "svelte";

  export let cardData: ProjectT;

  let baseUrl = urls.preLoadBase;
  let baseVideoUrl = urls.preLoadVideoBase;

  onMount(async () => {
    baseUrl = urls.getHighResUrl();
    baseVideoUrl = urls.getHighResVideoUrl();
  });
</script>

<div class="showcase clickable">
  <div class="text">
    <div class="text-content">
      <h3 class="title">{cardData.title}</h3>

      <caption>{cardData.description}</caption>

      <div class="read-more">read more →</div>
    </div>
  </div>

  <!-- svelte-ignore security-anchor-rel-noreferrer -->
  <a href={cardData.follow_url} target="_blank" rel="noopener">
    <div class="img">
      <img src={baseUrl + cardData.image_url} defer alt="project" />

      {#if cardData.hover_img}
        <img
          defer
          class="hover-img"
          src={baseUrl + cardData.hover_img}
          alt="project hover"
        />
      {:else if cardData.hover_video}
        <video playsinline autoplay muted loop class="hover-img">
          <source
            defer
            src={baseVideoUrl + cardData.hover_video}
            loading="lazy"
            alt="project hover"
          />
        </video>
      {/if}
    </div>
  </a>
</div>

<style lang="scss">
  .showcase {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: row;
    background-color: #333;

    overflow: hidden;
    text-align: center;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      text-decoration: none;
      height: 100%;
      padding-bottom: 20px;
      margin-bottom: auto;
      box-sizing: border-box;
      width: 100%;
      position: relative;
    }

    .img {
      position: relative;
      width: 100vmin;
      aspect-ratio: 1;

      &:hover {
        .hover-img {
          display: block;
        }
      }

      .hover-img {
        display: none;
      }
    }

    .text {
      max-width: calc(100% - 100vmin);
      height: 100%;
      box-sizing: border-box;
      display: flex;
      text-align: left;

      caption {
        text-align: left;
      }

      h3 {
        margin-top: 0;
        margin-bottom: 20px;

        text-align: left;
      }

      .text-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-left: 100px;
        padding-right: 100px;
        justify-content: center;

        caption,
        h3,
        .read-more {
          &:hover {
            scale: 1.1;
            color: var(--accent-color);
          }
        }

        .read-more {
          margin-top: 50px;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }

  img,
  video {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    .showcase {
      flex-direction: column-reverse;
      height: auto;

      a {
        padding: 0;
      }

      .img {
        width: 100%;
        height: 100%;
      }

      .text {
        max-width: 100%;
        height: auto;
        padding: 0;

        h3 {
          margin-top: 20px;
        }

        .text-content {
          padding: 0 20px;
        }

        .read-more {
          margin-bottom: 50px;
        }
      }
    }
  }
</style>
