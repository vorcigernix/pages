<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  a {
    text-decoration: none;
    color: rgb(184, 134, 11);
    text-align: center;
    display: inline-block;
    transition: all 0.3s;
  }

  a:hover {
    opacity: 0.6;
  }

  .cards {
    color: #333;
    font-size: 2em;
    padding: 1em;
  }

  .cards > ul {
    display: grid;
    grid-gap: 1rem;
  }
  .cards > ul > li {
    list-style: none;
  }

  @media (min-width: 800px) {
    .cards {
      color: #333;
      font-size: 2em;
      padding: 2em 5em;
    }

    .cards > ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-gap: 1rem;
    }

    .cards > ul > li {
      list-style: none;
      border: 1px solid #fff;
      padding: 2em;
      transition: all 0.5s;
    }

    .cards > ul > li:hover {
      border: 1px solid rgba(184, 135, 11, 0.5);
      background-color: #fff;
    }
    .cards > ul > li:hover a {
      text-decoration: underline;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
  <meta name="Description" content="Personal Blog of Adam Sobotka - Blog posts">
</svelte:head>

<section class="cards" id="cards">

  <ul>
    {#each posts as post}
      <li>

        <h3>{post.title}</h3>

        <p>{post.subtitle}</p>
        <a rel="prefetch" href="blog/{post.slug}">Read</a>
      </li>
    {/each}
  </ul>

</section>
