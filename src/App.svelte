<script>
  import { Router, Route } from 'svelte-routing';
  import PageQueries from './routes/PageQueries.svelte';
  import Navbar from './components/organisms/NavBar.svelte'
  // import PageQueriesWithArgs from './routes/PageQueriesWithArgs.svelte';
  // import PageMutation from './routes/PageMutation.svelte';
  // import PageSubscription from './routes/PageSubscription.svelte';

  export let url = '';
</script>

<style>

</style>


<Router {url}>
  <Navbar />
  <Route path="">
    <PageQueries />
  </Route>
</Router>
