
export function getBrowserTheme(){
  return window?.matchMedia('(prefers-color-scheme: dark)').matches ?
    'dark' : 
    'light'
}