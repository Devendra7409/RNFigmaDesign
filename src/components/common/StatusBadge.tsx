import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export type StatusType = 'active' | 'dormant' | 'pending';

export interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  style?: ViewStyle;
}

const STATUS_CONFIG: Record<
  StatusType,
  { label: string; dot: string; text: string; bg: string }
> = {
  active: {
    label: 'Active',
    dot: Colors.profitGreen,
    text: Colors.profitGreen,
    bg: Colors.profitGreenSoft,
  },
  dormant: {
    label: 'Dormant',
    dot: Colors.gold,
    text: Colors.gold,
    bg: Colors.goldGlow,
  },
  pending: {
    label: 'Pending',
    dot: Colors.textSecondary,
    text: Colors.textSecondary,
    bg: Colors.surfaceAlt,
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, style }) => {
  const cfg = STATUS_CONFIG[status];
  return (
    <View style={[styles.badge, { backgroundColor: cfg.bg }, style]}>
      <View style={[styles.dot, { backgroundColor: cfg.dot }]} />
      <Text style={[styles.text, { color: cfg.text }]}>{label ?? cfg.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: Radius.pill,
  },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  text: { ...Typography.captionSmall, fontWeight: '600' },
});

export default StatusBadge;
