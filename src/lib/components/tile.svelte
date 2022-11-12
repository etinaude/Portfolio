<script lang="ts">
  export let cardData: {
    title: string;
    description: string;
    image_url: string;

    hover_img?: string;
    hover_video?: string;
    follow_url?: string;
    small?: string;
  };

  export let follow_url: string = "https://github.com/etinaude";

  let card: HTMLElement;
</script>

<div class="tile">
  <!-- svelte-ignore security-anchor-rel-noreferrer -->
  <a href={follow_url} target="_blank" rel="noopener">
    <div class="img">
      <img src={cardData.image_url} alt="project" />
    </div>

    <div class="text">
      <h3>{cardData.title}</h3>

      <caption>{cardData.description}</caption>
    </div>
  </a>
</div>

<style lang="scss">
  * {
    cursor: pointer;
  }

  .tile {
    height: 300px;

    overflow: hidden;
    border-radius: 0px;
    background-color: #444;
    display: flex;
    text-align: center;
    cursor: pointer;
    position: relative;

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

    .img,
    .text {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .text {
      z-index: 5;
      background-color: #222a;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 0px;
      backdrop-filter: blur(1px);
    }

    &:hover .text {
      height: 100%;
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
</style>
