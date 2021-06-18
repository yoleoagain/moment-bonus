<script lang="ts">
  import type { Pallete } from '../../components/theme/palettes'
  import type { NumberHashMap } from '../../types/common'
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import palettes from '../../components/theme/palettes'
  import paddings from '../../components/theme/paddings'
  import { getBrowserTheme } from '../../utils/browser'

  type Theme = {
    mode: 'dark' | 'light'
    palette: Pallete
    paddings: NumberHashMap
  }
  let mode = getBrowserTheme()
  let theme = writable<Theme>({
    mode,
    paddings,
    palette: palettes[mode],
  })

  const setRootColors = (theme: Theme) => {
    for (let [prop, color] of Object.entries(theme.palette)) {
      let varString = `--theme-${prop}`
      document.documentElement.style.setProperty(varString, color)
    }
    document.documentElement.style.setProperty('--theme-mode', theme.mode)
  }

  setContext('theme', {
    theme,
    toogle: () => {
      const newMode = $theme.mode === 'dark' ? 'light' : 'dark'
      const newTheme: Theme = {
        ...$theme,
        mode: newMode,
        palette: palettes[newMode],
      }

      theme.set(newTheme)
      setRootColors(newTheme)
    },
  })

  onMount(() => {
    setRootColors($theme)
  })
</script>

<slot />
