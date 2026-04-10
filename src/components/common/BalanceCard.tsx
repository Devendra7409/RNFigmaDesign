import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import GradientCard from './GradientCard';

export interface BalanceCardProps {
  label?: string;
  amount: string;
  subAmount?: string;
  primaryAction?: { label: string; onPress?: () => void };
  secondaryAction?: { label: string; onPress?: () => void };
}

/**
 * BalanceCard — gold-glow hero card used for:
 *  - Commission Balance on HomeScreen
 *  - Available Balance on CommissionsScreen
 */
const BalanceCard: React.FC<BalanceCardProps> = ({
  label = 'Available Balance',
  amount,
  subAmount,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <GradientCard radius="xl" padding="xl">
      <View style={styles.topRow}>
        <View style={styles.labelRow}>
          <View style={styles.dot} />
          <Text style={styles.label}>{label}</Text>
        </View>
        {secondaryAction && (
          <TouchableOpacity onPress={secondaryAction.onPress} activeOpacity={0.7}>
            <Text style={styles.link}>{secondaryAction.label} ›</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.amount}>{amount}</Text>
      {!!subAmount && <Text style={styles.sub}>{subAmount}</Text>}

      {primaryAction && (
        <TouchableOpacity
          style={styles.primaryBtn}
          activeOpacity={0.85}
          onPress={primaryAction.onPress}
        >
          <Text style={styles.primaryText}>{primaryAction.label}</Text>
        </TouchableOpacity>
      )}
    </GradientCard>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  labelRow: { flexDirection: 'row', alignItems: 'center' },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gold,
    marginRight: Spacing.sm,
  },
  label: { ...Typography.captionSmall, color: Colors.textSecondary },
  link: { ...Typography.captionSmall, color: Colors.gold, fontWeight: '600' },
  amount: {
    ...Typography.displayAmount,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  sub: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    marginBottom: Spacing.lg,
  },
  primaryBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.gold,
    borderRadius: Radius.pill,
    marginTop: Spacing.sm,
    shadowColor: Colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryText: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.3,
  },
});

export default BalanceCard;
