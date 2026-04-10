import { Colors } from './colors';
import { FontFamily, FontSize, Typography } from './fonts';
import { IconSize, Radius, Spacing } from './spacing';

export const Theme = {
  colors: Colors,
  spacing: Spacing,
  radius: Radius,
  iconSize: IconSize,
  font: { family: FontFamily, size: FontSize },
  typography: Typography,
  shadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.35,
      shadowRadius: 16,
      elevation: 10,
    },
    gold: {
      shadowColor: Colors.gold,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 18,
      elevation: 12,
    },
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
  },
} as const;

export type AppTheme = typeof Theme;

export { Colors, Spacing, Radius, IconSize, Typography, FontFamily, FontSize };
