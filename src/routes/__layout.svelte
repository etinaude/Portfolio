<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Cursor from "$lib/components/cursor.svelte";
  import Welcome from "$lib/components/welcome.svelte";

  import "../app.scss";

  let pos = { x: 0, y: 0 };

  function mouseMove(event: any) {
    pos.x = event.x;
    pos.y = event.y;
  }
</script>

<main on:mousemove={mouseMove}>
  <Header />
  <slot />

  <Cursor {pos} />
  <Welcome />
</main>
