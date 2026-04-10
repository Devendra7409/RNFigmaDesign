import { Platform, TextStyle } from 'react-native';

export const FontFamily = {
  regular: Platform.select({ ios: 'System', android: 'Roboto' }) as string,
  medium: Platform.select({ ios: 'System', android: 'Roboto-Medium' }) as string,
  semiBold: Platform.select({ ios: 'System', android: 'Roboto-Medium' }) as string,
  bold: Platform.select({ ios: 'System', android: 'Roboto-Bold' }) as string,
};

export const FontSize = {
  caption: 11,
  small: 12,
  body: 14,
  bodyLarge: 15,
  subtitle: 16,
  title: 18,
  heading: 22,
  display: 28,
  hero: 34,
} as const;

export const Typography: Record<string, TextStyle> = {
  headingLarge: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.heading,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  headingMedium: {
    fontFamily: FontFamily.semiBold,
    fontSize: FontSize.title,
    fontWeight: '600',
    letterSpacing: 0.15,
  },
  displayAmount: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.hero,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  bodyMedium: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.body,
    fontWeight: '500',
  },
  bodyRegular: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.body,
    fontWeight: '400',
  },
  captionSmall: {
    fontFamily: FontFamily.regular,
    fontSize: FontSize.caption,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  label: {
    fontFamily: FontFamily.medium,
    fontSize: FontSize.small,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
};
