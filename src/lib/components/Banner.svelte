<script>
  export let bannerInfo = {
    style: "",
    text: "",
    display: false,
  };
</script>

<div
  class="banner {bannerInfo.style}  {bannerInfo.display ? 'shown' : 'hidden'}"
>
  <div class="text">
    {bannerInfo.text}
  </div>
</div>

<style lang="scss">
  .banner {
    border-radius: 10px;
    text-align: center;
    font-weight: bold;

    position: fixed;
    top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
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
    background-color: #43ff82;

    .text {
      color: #222;
    }
  }

  .error {
    background-color: #ff435c;
  }

  .loading {
    background-color: #43d0ff;
  }
</style>
