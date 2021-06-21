<script lang="ts">
  import { routes } from 'src/routes'
  import NavLink from '../atoms/NavLink.svelte'

  const { items, promotions, app, settings } = routes.app
</script>

<nav>
  <NavLink to={items.route}>{items.name}</NavLink>
  <NavLink to={promotions.route}>{promotions.name}</NavLink>
  <NavLink to={app.route}>{app.name}</NavLink>
  <NavLink to={settings.route}>{settings.name}</NavLink>
</nav>

<style>
  nav {
    overflow-y: auto;
    width: 100%;
    background: var(--theme-mainAccentBackground);
    color: var(--theme-primaryFont);
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
