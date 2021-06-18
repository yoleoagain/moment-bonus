type Colors = 'primaryBackground' |
  'mainAccentBackground' |
  'hoveredBackground' |
  'primaryFont' |
  'highlitsColor'

export type Pallete = { [key in Colors]: string }

const dark: Pallete = {
  primaryBackground: '#444444',
  mainAccentBackground: '#524f4e',
  hoveredBackground: '#555555',
  primaryFont: '#ffffff',
  highlitsColor: '#ff3e00',
}

const light: Pallete = {
  primaryBackground: '#fff',
  mainAccentBackground: '#eee',
  hoveredBackground: '#534343',
  primaryFont: '#ffffff',
  highlitsColor: '#ff3e00',
}

export default { dark, light }