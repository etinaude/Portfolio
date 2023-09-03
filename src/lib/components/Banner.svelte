<script lang="ts">
  import type { BannerT } from "$lib/types/types";

  export let bannerInfo: BannerT;
</script>

<div
  class="banner {bannerInfo.style}  {bannerInfo.display ? 'shown' : 'hidden'}"
>
  <div class="text">
    {bannerInfo.text}
  </div>
</div>

<style lang="scss">
  @import "../styles/root.scss";

  .banner {
    border-radius: 10px;
    text-align: center;
    font-weight: bold;

    position: fixed;
    top: 10px;
    left: 50%;
    translate: -50%;
    overflow: hidden;
    z-index: 500;
    transition: 0.5s ease;

    display: flex;
    align-content: center;
    justify-content: center;

    &.hidden {
      width: 0px;
      height: 0px;
      padding: 0px;
    }

    &.shown {
      width: 90%;
      height: auto;
      padding: 1rem;
    }
  }

  .text {
    min-width: 60vh;
    text-align: center;
  }

  .success {
    background-color: $success;

    .text {
      color: $primary;
    }
  }

  .error {
    background-color: $danger;
  }

  .loading {
    background-color: $accent;
  }
</style>
