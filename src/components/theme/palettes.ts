type Colors = 'primaryBackground' |
  'primaryBackground20' |
  'mainAccentBackground' |
  'hoveredBackground' |
  'primaryFont' |
  'secondaryFont' |
  'highlitsColor' |
  'invertPrimaryBackground' |
  'borderColor'

export type Pallete = { [key in Colors]: string }

const dark: Pallete = {
  primaryBackground: '#444444',
  primaryBackground20: '#44444480',
  invertPrimaryBackground: '#fff',
  mainAccentBackground: '#524f4e',
  hoveredBackground: '#555555',
  primaryFont: '#ffffff',
  secondaryFont: '#ada4a4',
  highlitsColor: '#ff3e00',
  borderColor: '#7b7472'
}

const light: Pallete = {
  primaryBackground: '#fff',
  primaryBackground20: '#44444480',
  invertPrimaryBackground: '#444444',
  mainAccentBackground: '#eee',
  hoveredBackground: '#534343',
  primaryFont: '#534343',
  secondaryFont: '#ada4a4',
  highlitsColor: '#ff3e00',
  borderColor: '#7b7472'
}

export default { dark, light }