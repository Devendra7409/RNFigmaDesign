import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface ProgressMilestoneCardProps {
  title: string;
  description?: string;
  current: number;
  target: number;
  formatValue?: (n: number) => string;
  accent?: string;
  compact?: boolean;
  style?: ViewStyle;
}

const ProgressMilestoneCard: React.FC<ProgressMilestoneCardProps> = ({
  title,
  description,
  current,
  target,
  formatValue = v => `₹${v.toLocaleString('en-IN')}`,
  accent = Colors.gold,
  compact = false,
  style,
}) => {
  const pct = Math.min(100, Math.max(0, (current / target) * 100));

  return (
    <View style={[styles.card, compact && styles.cardCompact, style]}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          {!!description && <Text style={styles.desc}>{description}</Text>}
        </View>
        <Text style={[styles.pct, { color: accent }]}>{Math.round(pct)}%</Text>
      </View>

      <View style={styles.track}>
        <View
          style={[styles.fill, { width: `${pct}%`, backgroundColor: accent }]}
        />
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerLabel}>{formatValue(current)}</Text>
        <Text style={styles.footerTarget}>of {formatValue(target)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  cardCompact: { padding: Spacing.md },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  desc: { ...Typography.captionSmall, color: Colors.textMuted, marginTop: 2 },
  pct: { ...Typography.headingMedium },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.surfaceAlt,
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: 4 },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.md,
  },
  footerLabel: {
    ...Typography.captionSmall,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  footerTarget: { ...Typography.captionSmall, color: Colors.textMuted },
});

export default ProgressMilestoneCard;
