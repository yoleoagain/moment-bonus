<script>
  import { Router, Route } from 'svelte-routing'
  import PageQueries from './routes/PageQueries.svelte'
  import Navbar from './components/organisms/NavBar.svelte'

  export let url = ''
</script>

<Router {url}>
  <Navbar />
  <Route path="">
    <PageQueries />
  </Route>
</Router>
