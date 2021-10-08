import type { Pallete } from '../../components/theme/palettes'
import type { Writable } from 'svelte/store'

export type Theme = {
  mode: 'dark' | 'light'
  palette: Pallete
  paddings: {
    double: string,
    mainAndHalf: string,
    main: string,
    half: string,
    quarter: string
  }
}
export type ThemeContext = { theme: Writable<Theme> }