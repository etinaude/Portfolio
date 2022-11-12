<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Cursor from "$lib/components/cursor.svelte";

  import "../app.scss";

  let pos = { x: 0, y: 0 };

  function mouseMove(event: any) {
    pos.x = event.x;
    pos.y = event.y;
  }
</script>

<Header />

<main on:mousemove={mouseMove}>
  <slot />

  <Cursor {pos} />
</main>
