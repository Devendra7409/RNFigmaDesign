export const Colors = {
  background: '#0B0B0D',
  surface: '#141418',
  surfaceAlt: '#1C1C22',
  card: '#17171C',
  cardElevated: '#202027',
  border: '#26262E',
  divider: '#1F1F26',

  gold: '#F5C451',
  goldDark: '#C99A2E',
  goldGlow: 'rgba(245, 196, 81, 0.25)',

  profitGreen: '#26E07F',
  profitGreenSoft: 'rgba(38, 224, 127, 0.12)',
  lossRed: '#FF5B6A',
  lossRedSoft: 'rgba(255, 91, 106, 0.12)',

  textPrimary: '#FFFFFF',
  textSecondary: '#B5B5BD',
  textMuted: '#7A7A85',
  textSubtle: '#55555E',

  statusActive: '#26E07F',
  statusDormant: '#F5C451',

  overlay: 'rgba(0, 0, 0, 0.6)',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ColorKey = keyof typeof Colors;
