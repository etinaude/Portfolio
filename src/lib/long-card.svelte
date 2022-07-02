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
  <div>
    <h3>{title}</h3>
    <p bind:this={paragraph} />
  </div>

  <img class="tilt" alt="Unleash logo" src={image_url} bind:this={imgElement} />
</div>

<style lang="scss">
  .long-card {
    display: flex;
    text-decoration: none;
    margin: 10px;
    flex-direction: row-reverse;

    img {
      height: 180px;
      margin-right: 50px;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

      @media (max-height: 1100px) {
        height: 150px;
      }
    }

    &.right {
      flex-direction: row;

      img {
        margin-left: 50px;
        margin-right: 0;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.right {
        flex-direction: column-reverse;

        img {
          margin: 0;
        }
      }

      img {
        height: auto;
        width: min(200px, 100%);
        margin: 0;
        margin-bottom: 20px;
      }
    }

    @media (max-height: 1100px) {
      height: 160px;

      h3 {
        margin-top: 0;
      }

      &.left {
        img {
          margin-right: 25px;
        }
      }

      &.right {
        img {
          margin-left: 25px;
        }
      }
    }
  }
</style>
