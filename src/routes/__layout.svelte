<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  import Splash from "$lib/components/Splash.svelte";

  import "../app.scss";
  import type { posT } from "$lib/types/types";
  import Footer from "$lib/components/Footer.svelte";

  let pos: posT = { x: 0, y: 0, clickable: false };

  function mouseMove(event: any) {
    pos.x = event.x;
    pos.y = event.y;

    for (const el of event.path) {
      if (el.classList?.contains("clickable")) {
        pos.clickable = true;
        return;
      }
    }
    pos.clickable = false;
  }
</script>

<main on:mousemove={mouseMove}>
  <Header />
  <slot />

  <Cursor {pos} />
  <Splash />
</main>
