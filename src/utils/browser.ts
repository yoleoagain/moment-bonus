
type ThemeMode = 'dark' | 'light'
export function getBrowserTheme(): ThemeMode {
  return window?.matchMedia('(prefers-color-scheme: dark)').matches ?
    'dark' : 
    'light'
}