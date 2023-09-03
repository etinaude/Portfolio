<script context="module" lang="ts">
  export const prerender = true;
  import Links from "$lib/components/LinksComp.svelte";
  import MiniProfile from "$lib/components/MiniProfile.svelte";
</script>

<svelte:head>
  <title>Etienne Naude</title>
  <meta name="description" content="Etienne Naude Social Links" />
</svelte:head>

<section>
  <div class="space" />
  <MiniProfile />
  <Links />

  <div>
    <img class="qrcode" src="qr.svg" alt="qr code" />
  </div>
</section>

<style lang="scss">
  $primary-color: #222;
  $accent-color: #43d0ff;
  $text-color: #fff;

  section {
    background-color: $primary-color;
  }

  .space {
    height: 100px;
  }

  .qrcode {
    width: 250px;
    height: 250px;
    display: block;
    margin-top: 200px;
  }

  @media (max-width: 768px) {
    .qrcode {
      margin-top: 50vw;
      margin-bottom: 20vw;
    }
  }
</style>
