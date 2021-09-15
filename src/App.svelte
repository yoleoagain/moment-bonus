<script>
  import { Router, Route } from 'svelte-routing'
  import { routes } from './routes'
  import Items from './routes/Items.svelte'
  import ThemeSwitchButton from './components/atoms/ThemeSwitchButton.svelte'
  import Navbar from './components/organisms/NavBar.svelte'
  import Theme from './components/context/Theme.svelte'

  export let url = ''
</script>

<Theme>
  <Router {url}>
    <Navbar />
    <Route path={routes.app.items.route}>
      <Items />
      <ThemeSwitchButton />
    </Route>
  </Router>
</Theme>

<style>
  :global(html) {
    background-color: var(--theme-primaryBackground);
    color: var(--theme-primaryFont);
  }
  :global(::placeholder) {
    color: var(--theme-primaryFont);
    opacity: 1;
  }
  :global(a) {
    color: var(--theme-primaryFont);
    opacity: 1;
  }
  :global(label) {
    color: var(--theme-primaryFont);
  }
</style>
