<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    font-size: 2em;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    color: rgb(184, 134, 11);;
  }


  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: black;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 500;
  }
  a:hover {
    opacity: 0.6;
  }
  img {
    padding: 1em;
    width: 1em;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <picture>
      <source type="image/webp" srcset="as.webp" />
      <source type="image/jpeg" srcset="as.png" />
      <img alt="navigation illustration" src="adam.png" />
    </picture>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
