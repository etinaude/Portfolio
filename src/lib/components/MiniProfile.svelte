<script context="module" lang="ts">
  export const prerender = true;
</script>

<div>
  <div class="profile">
    <img alt="linked in logo" src="black_profile.webp" />
  </div>

  <h2>Etienne Naude</h2>
</div>

<style lang="scss">
  $primary-color: #222;
  $accent-color: #43d0ff;
  $text-color: #fff;

  section {
    background-color: $primary-color;
  }

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
</style>
