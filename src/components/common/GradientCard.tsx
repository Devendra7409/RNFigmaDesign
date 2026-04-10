import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

/**
 * GradientCard — a dark-to-gold subtle gradient card.
 *
 * NOTE: To keep this project dependency-free, we simulate a gradient using
 * layered absolute views. Replace with `react-native-linear-gradient` for
 * a production-grade linear gradient if available.
 */

export interface GradientCardProps {
  style?: ViewStyle | ViewStyle[];
  radius?: keyof typeof Radius;
  padding?: keyof typeof Spacing;
  glow?: boolean;
  children?: React.ReactNode;
}

const GradientCard: React.FC<GradientCardProps> = ({
  style,
  radius = 'xl',
  padding = 'xl',
  glow = true,
  children,
}) => {
  return (
    <View
      style={[
        styles.wrap,
        glow && styles.glow,
        {
          borderRadius: Radius[radius],
          padding: Spacing[padding],
        },
        style,
      ]}
    >
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.layerBase,
          { borderRadius: Radius[radius] },
        ]}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.layerGold,
          { borderRadius: Radius[radius] },
        ]}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.18)',
  },
  layerBase: {
    backgroundColor: '#181410',
  },
  layerGold: {
    backgroundColor: Colors.goldGlow,
    opacity: 0.55,
    transform: [{ translateY: 40 }],
  },
  glow: {
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 22,
    elevation: 14,
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
});

export default GradientCard;
