<script>
  import { Router, Route } from 'svelte-routing'
  import { routes } from './routes'
  import Items from './routes/Items.svelte'
  import Navbar from './components/organisms/NavBar.svelte'
  import Theme from './components/context/Theme.svelte'

  export let url = ''
</script>

<Theme>
  <Router {url}>
    <Navbar />
    <Route path={routes.app.items.route}>
      <Items />
    </Route>
  </Router>
</Theme>

<style>
  :global(html) {
    background-color: var(--theme-primaryBackground);
    color: var(--theme-primaryFont);
  }
</style>
