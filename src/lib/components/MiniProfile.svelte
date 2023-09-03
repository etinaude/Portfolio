<script lang="ts">
  let showQR = false;

  function toggleQr() {
    showQR = !showQR;
  }
</script>

<div>
  <div class="profile" on:click={toggleQr}>
    <img alt="linked in logo" src="black_profile.webp" />
  </div>

  <h2>Etienne Naude</h2>
</div>

{#if showQR}
  <div class="qr-cont" on:click={toggleQr}>
    <img class="qrcode" src="qr.svg" alt="qr code" />

    <p>etinaude.dev/contact</p>
  </div>
{/if}

<style lang="scss">
  @import "../styles/root.scss";

  h2 {
    text-align: center;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .qr-cont {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    flex-direction: column;

    p {
      color: $accent;
      font-size: 1.5rem;
      margin-top: 2rem;
      font-weight: bold;
    }

    .qrcode {
      width: 300px;
      height: 300px;
    }
  }
</style>
