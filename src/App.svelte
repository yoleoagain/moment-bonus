<script>
  import { Router, Route } from 'svelte-routing'
  import PageQueries from './routes/PageQueries.svelte'
  import Navbar from './components/organisms/NavBar.svelte'
  import Theme from './components/context/Theme.svelte'

  export let url = ''
</script>
<Theme>
  <Router {url}>
    <Navbar />
    <Route path="">
      <PageQueries />
    </Route>
  </Router>
</Theme>
<style>
  :global(html) {
    background-color: var(--theme-primaryBackground);
    color: var(--theme-primaryFont);
  }
</style>
