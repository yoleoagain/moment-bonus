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
  :global(html),
  :global(h3),
  :global(h2),
  :global(h1),
  :global(span) {
    color: var(--theme-primaryFont);
  }
  :global(h3),
  :global(h2),
  :global(h1) {
    font-weight: 600;
  }
  :global(html) {
    background-color: var(--theme-primaryBackground);
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
    color: var(--theme-primaryFont) !important;
  }

  /**
    ScrollBar
  */
  :global(::-webkit-scrollbar) {
    width: 8px;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #888;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }
  /**
    Body
  */
  :global(html) {
    overflow-y: hidden;
  }

  :global(body) {
    overflow-y: hidden;
  }
  :global(.listGroupTitle) {
    display: none;
  }

  :global(ul) {
    color: var(--theme-primaryFont) !important;
  }
</style>
