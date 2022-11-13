<script lang="ts">
  import type { posT } from "$lib/types/types";

  export let pos: posT;

  const outerOffest = 12;
</script>

<div
  class="outer {pos.clickable ? 'clickable' : ''}"
  style="top: {pos.y - outerOffest}px; left: {pos.x - outerOffest}px;"
>
  <div class="inner" />
</div>

<style lang="scss">
  .outer {
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    pointer-events: none;
    transition: none;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;

    &.clickable {
      cursor: pointer;
      animation: pulse 1s infinite;

      .inner {
        background-color: white;
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
    }
  }

  @keyframes pulse {
    0% {
      scale: 1;
      border-color: white;
    }
    100% {
      scale: 1.5;
      border-color: #fff0;
    }
  }

  .inner {
    width: 4px;
    height: 4px;
    background-color: #43d0ff;
    border-radius: 50%;
  }

  @media (prefers-color-scheme: dark) {
    .outer {
      border: 1px solid #222;
    }
  }

  @media (hover: none) {
    .outer,
    .inner {
      display: none;
    }
  }
</style>
