<script lang="ts">
  import type { NumberHashMap, StringHashMap } from '../../types/common'
  import type { Theme } from './context'
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import palettes from '../../components/theme/palettes'
  import paddings from '../../components/theme/paddings'
  import { getBrowserTheme } from '../../utils/browser'

  let mode = getBrowserTheme()
  let theme = writable<Theme>({
    mode,
    paddings,
    palette: palettes[mode],
  })

  const setRootVars = (theme: Theme) => {
    const mapVars = (itm: NumberHashMap | StringHashMap, prefix: string = '') =>
      Object.entries(itm).forEach(([prop, value]) => {
        document.documentElement.style.setProperty(
          `--theme-${prefix}${prop}`,
          value
        )
      })

    mapVars(theme.palette)
    mapVars(theme.paddings, 'gap-')

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
      setRootVars(newTheme)
    },
  })

  onMount(() => {
    setRootVars($theme)
  })
</script>

<slot />
