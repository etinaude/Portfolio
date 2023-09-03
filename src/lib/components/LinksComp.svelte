<script context="module" lang="ts">
  export const prerender = true;
  import linksImport from "$lib/data/socials.json";
</script>

<div class="list">
  {#each linksImport as link}
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      {#if link.icon}
        <div class="icon">
          <img src={link.icon} alt={link.name} />
        </div>
      {/if}
      {link.name}
      <div class="hover">
        <div class="user">{link.user}</div>
        <div class="url">{link.displayUrl}</div>
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  $primary-color: #222;
  $accent-color: #43d0ff;
  $text-color: #fff;

  section {
    background-color: $primary-color;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    min-width: 250px;
    min-height: 20px;

    background-color: $accent-color;
    color: black;
    padding: 20px 20px;
    font-weight: bold;

    border: 2px solid #151515;
    box-shadow: 0 4px 0 1px #151515;
    border-radius: 10px;

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      position: absolute;
      left: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hover {
      height: 0;
      overflow: hidden;
      position: absolute;
      bottom: 50%;
      right: 0;
      translate: 0 50%;

      z-index: 5;
      transition: height 0.5s ease, translate 0s 0.5s ease;

      // background: #151515;

      display: flex;
      flex-direction: column;
      justify-content: center;

      .user {
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        color: $accent-color;
        padding-bottom: 0;
      }

      .url {
        font-size: 12px;
        padding: 10px;
        color: $text-color;
      }
    }

    &:hover {
      scale: 1.1;

      .hover {
        height: 100px;
        border: 2px solid #151515;
        box-shadow: 0 4px 0 1px #151515;
        border-radius: 10px;
        translate: 110% 50%;
        transition: height 0.5s ease, translate 0.3s ease;
      }
    }
  }

  @media (max-width: 768px) {
    .hover {
      display: none !important;
    }
  }
</style>
