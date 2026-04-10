import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface ActionGridButtonProps {
  title: string;
  subtitle?: string;
  icon: string;
  onPress?: () => void;
  tint?: string;
  style?: ViewStyle;
}

/**
 * ActionGridButton — Card-style quick action tile used in a 2x3 grid.
 *
 * Layout:
 *   [ 🟨 icon ]
 *   Bold title
 *   Muted subtitle
 */
const ActionGridButton: React.FC<ActionGridButtonProps> = ({
  title,
  subtitle,
  icon,
  onPress,
  tint = Colors.gold,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.card, style]}
    >
      <View style={styles.iconBox}>
        <Text style={[styles.icon, { color: tint }]}>{icon}</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {!!subtitle && (
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#151116',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.12)',
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.sm,
    alignItems: 'center',
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: Radius.md,
    backgroundColor: 'rgba(245, 196, 81, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(245, 196, 81, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  icon: { fontSize: 20, fontWeight: '700' },
  title: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
  },
});

export default ActionGridButton;
