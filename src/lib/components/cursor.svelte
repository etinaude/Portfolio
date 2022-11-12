<script context="module" lang="ts">
  export const prerender = false;
</script>

<script lang="ts">
  export let pos: {
    x: number;
    y: number;
  };

  const outerOffest = 12;
  const innerOffest = 3;
</script>

<div
  class="outer"
  style="top: {pos.y - outerOffest}px; left: {pos.x - outerOffest}px;"
>
  <div
    class="inner"
    style="top: {pos.y - innerOffest}px; left: {pos.x - innerOffest}px;"
  />
</div>

<style lang="scss">
  .outer,
  .inner {
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    pointer-events: none;
    transition: none;
  }

  .outer {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid white;
  }

  .inner {
    width: 4px;
    height: 4px;
    background-color: #43d0ff;
  }
</style>
