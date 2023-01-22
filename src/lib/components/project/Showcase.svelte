<script lang="ts">
  import type { ProjectT } from "$lib/types/types";
  export let cardData: ProjectT[];
</script>

<div class="container">
  <div class="cards">
    {#each cardData as cardData}
      <div class="card">
        {#if cardData.follow_url}
          <!-- svelte-ignore security-anchor-rel-noreferrer a11y-missing-content-->
          <a
            href={cardData.follow_url}
            target="_blank"
            rel="noopener"
            class="clickable"
            aria-label="project link {cardData.title}"
          />
        {/if}

        <div class="img clickable">
          <img src={"images/" + cardData.image_url} alt={cardData.title} />

          {#if cardData.hover_img}
            <img
              class="hover-img"
              src={"images/" + cardData.hover_img}
              alt="project hover"
            />
          {:else if cardData.hover_video}
            <video playsinline autoplay muted loop class="hover-img">
              <source src={"images/" + cardData.hover_video} />
            </video>
          {/if}
        </div>

        <h3>{cardData.title}</h3>

        <caption>{cardData.description}</caption>

        {#if cardData.follow_url}
          <div class="read-more">read more →</div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    height: 1050px;
    width: 1200px;
    margin-bottom: 100px;

    &:hover {
      .card:nth-child(1) {
        translate: -450px;
        rotate: -20deg;
      }

      .card:nth-child(2) {
        translate: 0 -40px;
      }

      .card:nth-child(3) {
        translate: 450px;
        rotate: 20deg;
      }
    }

    &:not(:hover) {
      .card:nth-child(1) {
        translate: -40px;
        rotate: -5deg;
      }

      .card:nth-child(3) {
        translate: 40px;
        rotate: 5deg;
      }
    }
  }

  .cards {
    position: absolute;
    bottom: 0;
    left: 400px;
  }
  .card {
    transform-origin: 50% 70%;
    width: 420px;
    height: 900px;
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
    position: absolute;
    bottom: 0;
    left: 50%;

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
    margin-left: 10px;
    margin-right: 10px;
  }

  caption {
    padding: 0px 30px;
    font-size: 25px;
  }

  .read-more {
    margin-top: 10px;
    color: #bbb;
    font-size: 0.9em;
  }

  img,
  video {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    position: absolute;
    left: 0;
  }
</style>
