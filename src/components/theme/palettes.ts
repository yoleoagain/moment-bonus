type Colors = 'primaryBackground' |
  'mainAccentBackground' |
  'hoveredBackground' |
  'primaryFont' |
  'highlitsColor' |
  'invertPrimaryBackground' |
  'borderColor'

export type Pallete = { [key in Colors]: string }

const dark: Pallete = {
  primaryBackground: '#444444',
  invertPrimaryBackground: '#fff',
  mainAccentBackground: '#524f4e',
  hoveredBackground: '#555555',
  primaryFont: '#ffffff',
  highlitsColor: '#ff3e00',
  borderColor: '#7b7472'
}

const light: Pallete = {
  primaryBackground: '#fff',
  invertPrimaryBackground: '#444444',
  mainAccentBackground: '#eee',
  hoveredBackground: '#534343',
  primaryFont: '#534343',
  highlitsColor: '#ff3e00',
  borderColor: '#7b7472'
}

export default { dark, light }