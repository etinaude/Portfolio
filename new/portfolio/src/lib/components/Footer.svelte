<footer>
  Made Etienne Naude

  <a
    href="https://github.com/etinaude/Portfolio"
    target="_blank"
    rel="noreferrer">Source 🠖</a
  >
</footer>

<style lang="scss">
  @import "../styles/root.scss";

  footer {
    @include flex-center;

    width: 100%;
    height: 80px;
    background: $primary-xd;
    font-size: smaller;
  }

  a {
    transition: color 0.2s linear;
    margin-left: 20px;
  }

  a:hover {
    color: $accent;
  }
</style>
