<script>

</script>

<style>
  .grid-container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr 10em;
    gap: 1px 1px;
    grid-template-areas: "Picture" "Copy" "links";
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
    background: linear-gradient(rgb(184, 134, 11), rgb(145, 152, 229));
    width: 100vw;
  }

  .Picture img {
    transform: scale(0.8) translate(0, -20%);
    mix-blend-mode:screen;
  }

  .links {
    grid-area: links;
    align-self: center;
  }

  @media (min-width: 1000px) {
    .grid-container {
      display: grid;
      justify-items: center;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 200px;
      gap: 1px 1px;
      grid-template-areas:
        "Copy Picture"
        "links links";
    }

    .Copy {
      grid-area: Copy;
    }

    .Picture {
      grid-area: Picture;
      background:rgb(255, 255, 255);
      width: auto;
      mix-blend-mode: normal;
    }

    .links {
      grid-area: links;
    }
    .Picture img {
      translate: 0 0;
    }
  }
</style>

<svelte:head>
  <title>About</title>
  <meta
    name="Description"
    content="Personal Blog of Adam Sobotka, Director of Engineering at Socialbakers" />
</svelte:head>

<div class="grid-container">
  <div class="Copy">
    <h1>Adam <br /> Sobotka</h1>
    <p class="role">
      Director of Engineering <br />
      <a href="https://socialbakers.com">@ Socialbakers</a>
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
