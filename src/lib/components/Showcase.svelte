<script lang="ts">
  type Card = {
    title?: string;
    description?: string;
    image_url?: string;

    link?: string;
    hover_img?: string;
    hover_video?: string;
    follow_url?: string;
  };

  export let cardData: Card;
</script>

<div class="showcase">
  <!-- svelte-ignore security-anchor-rel-noreferrer -->
  <a href={cardData.follow_url} target="_blank" rel="noopener">
    <div class="img">
      <img src={cardData.image_url} alt="project" />

      {#if cardData.hover_img}
        <img class="hover-img" src={cardData.hover_img} alt="project hover" />
      {:else if cardData.hover_video}
        <video playsinline autoplay muted loop class="hover-img">
          <source
            src={cardData.hover_video}
            loading="lazy"
            alt="project hover"
          />
        </video>
      {/if}
    </div>

    <div class="text">
      <div class="text-content">
        <h3>{cardData.title}</h3>

        <caption>{cardData.description}</caption>

        <div class="read-more">read more →</div>
      </div>
    </div>
  </a>
</div>

<style lang="scss">
  .showcase {
    width: 100%;
    height: calc(100vh - 100px);

    overflow: hidden;
    text-align: center;
    cursor: pointer;

    * {
      cursor: pointer;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #fff;
      overflow: hidden;
      background-color: #222;
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
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      box-sizing: border-box;
      font-size: 2em;
      display: flex;
      text-align: left;

      caption {
        text-align: left;
      }

      h3 {
        font-size: 2em;
        margin-top: 0;
        margin-bottom: 20px;

        text-align: left;
      }

      .text-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background-color: #333;
        padding-left: 100px;
        padding-right: 100px;
        justify-content: center;

        &:hover h3 {
          color: var(--accent-tint-color);
        }

        caption,
        h3,
        .read-more {
          &:hover {
            scale: 1.1;
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
</style>
