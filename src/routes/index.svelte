<script>

</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px 1fr 10em 10em;
    gap: 1px;
    grid-template-areas: "Picture" "Copy" "links-left" "links-right";
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

  .links-left {
    grid-area: links-left;
  }

  .links-right {
    grid-area: links-right;
  }

  @media (min-width: 800px) {
    .grid-container {
      display: grid;
      grid-template-columns: minmax(1em, 1fr) 2fr 1fr minmax(1em, 1fr);
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      gap: 1em 1em;
      grid-template-areas: ". Copy Picture ." ". links-left links-right .";
    }
    .Picture {
      grid-area: Picture;
    }
    .Picture img {
      transform: translate(0,0);
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
    <img alt="My portrait" src="adam.jpg" />
  </div>
  <div class="links-left" />
  <div class="links-right" />
</div>
