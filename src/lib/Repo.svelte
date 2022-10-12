<script lang="ts">
  export let repo: any;
</script>

<a class="repo" href={repo.html_url} target="_blank">
  <h3>{repo.name}</h3>
  <p>
    {repo.description ?? repo.name}
  </p>

  <div class="info">
    <div>
      <svg
        aria-label="star"
        role="img"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
      >
        <path
          fill-rule="evenodd"
          fill="#43d0ff"
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        />
      </svg>
      {repo.stargazers_count}
    </div>
    <div class="lang">
      <div class="lang-color" style="--color: {repo.languageColor}" />
      {repo.language}
    </div>
    <br />
  </div>
</a>

<style lang="scss">
  .repo {
    width: 400px;
    border-radius: 5px;
    border: 1px solid grey;
    background: #252525;
    padding: 20px;
    color: var(--text-color);
    cursor: pointer;

    h3 {
      color: var(--accent-color);
      margin: 0;
    }

    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .lang {
        display: flex;
        flex-direction: row;

        .lang-color {
          background-color: var(--color);
          width: 1em;
          height: 1em;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }
      }
    }

    &:hover {
      background: #333;
      scale: 1.05;
    }
  }
</style>
