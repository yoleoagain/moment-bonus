<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import palettes from '../components/theme/palettes'
  import paddings from '../components/theme/paddings'
  import { getBrowserTheme } from '../utils/browser'

  let mode = getBrowserTheme()
  let theme = writable({
    mode,
    palette: palettes[mode],
    paddings,
  })

  setContext('theme', {
    theme,
    toogle: () =>
      theme.update((t) => ({
        ...t,
        palette: palettes[mode === 'drak' ? 'light' : 'dark'],
      })),
  })
</script>

<slot />
