<script>

</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px 1fr 10em 10em;
    gap: 1px;
    grid-template-areas: "Picture" "Copy" "links" "links";
  }

  .Copy {
    grid-area: Copy;
    color: #333;
    font-size: 2em;
    padding: 1em;
  }

  .Picture {
    grid-area: Picture;
    overflow: hidden;
  }

  .Picture img {
    transform: translate(3em, -30%);
  }

  .links {
    grid-area: links;
  }

  .links img {
    padding-left: 2em;
  }

  @media (min-width: 800px) {
    .grid-container {
      display: grid;
      grid-template-columns: minmax(1em, 1fr) 2fr 1fr minmax(1em, 1fr);
      grid-template-rows: 1fr 200px;
      align-items: center;
      justify-content: center;
      gap: 1em 1em;
      grid-template-areas: ". Copy Picture ." ". links links .";
    }
    .Picture {
      grid-area: Picture;
    }
    .Picture img {
      transform: translate(0, 0);
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="grid-container">
  <div class="Copy">
    <h1>
      Adam
      <br />
      Sobotka
    </h1>
    <p class="role">
      Director of Engineering
      <br />
      <a href="https://sociabakers.com">@ Socialbakers</a>
    </p>
    <p>I have a passion for building things and coaching people.</p>
  </div>
  <div class="Picture">
    <picture>
      <source type="image/webp" srcset="adam.webp" />
      <source type="image/jpeg" srcset="adam.jpg" />
      <img alt="My portrait" src="adam.jpg" />
    </picture>
  </div>
  <div class="links">
    <a href="https://github.com/vorcigernix">
      <img alt="My Github Account" src="GitHub-Mark-32px.png" />
    </a>
  </div>
</div>
