<script lang="ts">
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";

  export let title: string;
  export let description: string;
  export let image_url: string;

  export let side: string = "left";

  let imgElement: HTMLElement;
  let paragraph: HTMLElement;

  onMount(() => {
    paragraph.innerHTML = description;

    VanillaTilt.init(imgElement, { glare: true });
  });
</script>

<div class="long-card {side}">
  <div class="text">
    <h3>{title}</h3>
    <p bind:this={paragraph} />
  </div>

  <img class="tilt" alt="Unleash logo" src={image_url} bind:this={imgElement} />
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
      margin-bottom: auto;

      @media (max-height: 1201px) {
        max-width: calc(100% - 180px);
      }
    }

    img {
      height: 180px;
      place-self: center;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

      @media (max-height: 1201px) {
        height: 150px;
      }
    }

    &.right {
      flex-direction: row;
    }

    @media (max-width: 700px) {
      flex-direction: column-reverse !important;
      align-items: center;
      justify-content: center;

      h3 {
        text-align: center;
      }

      .text {
        max-width: 100%;
      }
    }
  }
</style>
