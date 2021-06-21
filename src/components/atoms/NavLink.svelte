<script>
  import { link } from 'svelte-routing'

  export let to = ''
  let isActive = location.pathname === to
</script>

<a class:nav-active={isActive} class="link" href={to} use:link>
  <slot />
</a>

<style>
  .nav-active {
    border-bottom: 2px solid #eee;
  }
  .link:a {
    text-decoration: none;
    border: none;
  }
  .link:hover {
    text-decoration: none;
    color: var(--theme---theme-primaryFont);
  }
</style>
