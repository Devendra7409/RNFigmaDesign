import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaType?: 'profit' | 'loss' | 'neutral';
  icon?: React.ReactNode;
  style?: ViewStyle;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  delta,
  deltaType = 'neutral',
  icon,
  style,
}) => {
  const deltaColor =
    deltaType === 'profit'
      ? Colors.profitGreen
      : deltaType === 'loss'
      ? Colors.lossRed
      : Colors.textSecondary;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topRow}>
        {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>
      </View>
      <Text style={styles.value} numberOfLines={1}>
        {value}
      </Text>
      {!!delta && (
        <Text style={[styles.delta, { color: deltaColor }]} numberOfLines={1}>
          {delta}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  iconWrap: { marginRight: Spacing.xs },
  label: { ...Typography.captionSmall, color: Colors.textMuted },
  value: { ...Typography.headingMedium, color: Colors.textPrimary },
  delta: { ...Typography.captionSmall, marginTop: 4, fontWeight: '600' },
});

export default StatCard;
