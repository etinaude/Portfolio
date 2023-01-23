<script lang="ts">
  import type { LongCardT } from "$lib/types/types";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  import Saos from "saos";

  export let cardData: LongCardT;

  let imgElement: HTMLElement;

  onMount(() => {
    VanillaTilt.init(imgElement, { glare: true });
  });
</script>

<Saos animation={"from-" + cardData.side + " 1s ease"}>
  <div class="long-card {cardData.side}">
    <div class="text">
      <h3>{cardData.title}</h3>
      <p>{cardData.description}</p>
    </div>

    <img
      class="tilt"
      alt="Unleash logo"
      src={"images" + cardData.image_url}
      bind:this={imgElement}
    />
  </div>
</Saos>

<style lang="scss">
  .long-card {
    display: flex;
    text-decoration: none;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 30px;

    .text {
      max-width: calc(100% - 210px);
      margin-top: auto;
    }

    img {
      height: min(180px, 50vw);
      place-self: center;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    }

    &.right {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    .long-card {
      flex-direction: column-reverse;

      align-items: center;

      .text {
        max-width: 100%;
        margin-top: 0;
      }

      &.right {
        flex-direction: column-reverse;
      }
    }
  }
</style>
