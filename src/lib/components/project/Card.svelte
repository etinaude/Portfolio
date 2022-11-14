<script lang="ts">
  import type { ProjectT } from "$lib/types/types";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";

  export let cardData: ProjectT;

  let card: HTMLElement;

  onMount(() => {
    VanillaTilt.init(card, { glare: true });
  });
</script>

<div class="card tilt" bind:this={card}>
  {#if cardData.follow_url}
    <!-- svelte-ignore security-anchor-rel-noreferrer a11y-missing-content-->
    <a
      href={cardData.follow_url}
      target="_blank"
      rel="noopener"
      class="clickable"
    />
  {/if}

  <div class="img clickable">
    <img src={cardData.image_url} alt="project" />

    {#if cardData.hover_img}
      <img class="hover-img" src={cardData.hover_img} alt="project hover" />
    {:else if cardData.hover_video}
      <video playsinline autoplay muted loop class="hover-img">
        <source src={cardData.hover_video} loading="lazy" alt="project hover" />
      </video>
    {/if}
  </div>

  <h3>{cardData.title}</h3>

  <caption>{cardData.description}</caption>

  <div class="read-more">read more →</div>
</div>

<style lang="scss">
  .card {
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 2px #0000004d;
    background-color: #444;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    box-sizing: border-box;
    position: relative;

    a {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }

    .img {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
    }

    .hover-img {
      display: none;
    }

    &:hover {
      .hover-img {
        display: block;
      }
    }
  }

  h3 {
    color: #43d0ff;
    margin-bottom: 8px;
  }

  caption {
    padding: 0px 30px;
  }

  .read-more {
    margin-top: 10px;
    color: #bbb;
    font-size: 0.9em;
    display: none;
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
    .card {
      width: 100%;
      height: 100%;
    }
  }
</style>
