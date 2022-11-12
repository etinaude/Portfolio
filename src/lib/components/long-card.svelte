<script lang="ts">
  import type { ProjectT } from "$lib/types/types";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";

  export let cardData: ProjectT;

  let imgElement: HTMLElement;
  let paragraph: HTMLElement;

  onMount(() => {
    paragraph.innerHTML = cardData.description;

    VanillaTilt.init(imgElement, { glare: true });
  });
</script>

<div class="long-card {cardData.side}">
  <div class="text">
    <h3>{cardData.title}</h3>
    <p bind:this={paragraph} />
  </div>

  <img
    class="tilt"
    alt="Unleash logo"
    src={cardData.image_url}
    bind:this={imgElement}
  />
</div>

<style lang="scss">
  .long-card {
    display: flex;
    text-decoration: none;
    flex-direction: row-reverse;
    justify-content: space-between;

    .text {
      max-width: calc(100% - 210px);
      margin-top: auto;
    }

    img {
      height: 180px;
      place-self: center;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    }

    &.right {
      flex-direction: row;
    }
  }
</style>
