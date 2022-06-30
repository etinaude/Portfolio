<script lang="ts">
  export let title: string;
  export let description: string;
  export let image_url: string;

  export let hover_img: string = "";
  export let hover_video: string = "";
  export let follow_url: string = "https://github.com/etinaude";

  export let small: string = "false";
</script>

<div class="card tilt {small == 'true' ? 'small' : ''}" id="card">
  <a href={follow_url} target="_blank" rel="noopener">
    <div class="img">
      <img src={image_url} alt="project" />

      {#if hover_img}
        <img
          class="hover-img"
          src={hover_img}
          loading="lazy"
          alt="project hover"
        />
      {:else if hover_video}
        <video playsinline autoplay muted loop class="hover-img">
          <source src={hover_video} loading="lazy" alt="project hover" />
        </video>
      {/if}
    </div>

    <h3>{title}</h3>

    <caption>{description}</caption>

    <div class="read-more">read more →</div>
  </a>
</div>

<style lang="scss">
  .card {
    width: 30%;
    margin-bottom: 60px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 2px #0000004d;
    background-color: #444;
    display: flex;
    text-align: center;
    cursor: pointer;

    * {
      cursor: pointer;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      overflow: hidden;
      background-color: #444;
      text-decoration: none;
      height: 100%;
      padding-bottom: 20px;
      margin-bottom: auto;
      box-sizing: border-box;
      width: 100%;
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

  .card.small {
    width: 23%;
    .read-more {
      display: none;
    }

    h3 {
      color: #43d0ff;
      margin-bottom: 8px;
      font-size: 1.2em;
    }

    caption {
      padding: 0px 10px;
    }
  }

  @media (max-width: 1100px) {
    .card {
      width: calc(50% - 20px);
    }

    .card.small {
      width: calc(33% - 20px);
    }
  }

  @media (max-width: 700px) {
    .card {
      width: 100%;
      img,
      .img {
        aspect-ratio: 3/2;
      }
    }

    .card.small {
      width: calc(50% - 20px);

      img,
      .img {
        aspect-ratio: 1;
      }
    }

    @media (max-width: 450px) {
      .card.small {
        width: 100%;
        img,
        .img {
          aspect-ratio: 3/2;
        }
      }
    }
  }
</style>
