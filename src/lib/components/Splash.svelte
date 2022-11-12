<div class="background">
  <div class="container">Welcome!</div>
  <div class="loading" />
</div>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    animation: fade 0.5s ease-in-out forwards;
    animation-delay: 1s;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .container {
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #43d0ff;
    font-size: max(3rem, 6vw);
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .loading {
    border: 15px solid #444; /* Light grey */
    border-top: 15px solid #43d0ff; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
