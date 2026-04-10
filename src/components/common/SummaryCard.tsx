import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface SummaryCardProps {
  label: string;
  amount: string;
  subLabel?: string;
  change?: string;
  changeType?: 'profit' | 'loss';
  accent?: 'default' | 'gold';
  style?: ViewStyle;
}

/**
 * SummaryCard — the "Lifetime Earnings" style summary tile: single amount
 * with an optional change pill. Also reused on the Commissions screen for
 * monthly average and lifetime stats.
 */

const SummaryCard: React.FC<SummaryCardProps> = ({
  label,
  amount,
  subLabel,
  change,
  changeType = 'profit',
  accent = 'default',
  style,
}) => {
  const changeColor =
    changeType === 'profit' ? Colors.profitGreen : Colors.lossRed;
  const changeBg =
    changeType === 'profit' ? Colors.profitGreenSoft : Colors.lossRedSoft;

  return (
    <View
      style={[
        styles.card,
        accent === 'gold' && styles.cardGold,
        style,
      ]}
    >
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>{label}</Text>
          <Text
            style={[
              styles.amount,
              accent === 'gold' && { color: Colors.gold },
            ]}
          >
            {amount}
          </Text>
          {!!subLabel && <Text style={styles.sub}>{subLabel}</Text>}
        </View>
        {!!change && (
          <View
            style={[
              styles.changePill,
              { backgroundColor: changeBg, borderColor: `${changeColor}55` },
            ]}
          >
            <Text style={[styles.changeText, { color: changeColor }]}>
              {change}
            </Text>
          </View>
        )}
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
  cardGold: {
    borderColor: 'rgba(245, 196, 81, 0.25)',
    backgroundColor: '#181410',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { ...Typography.captionSmall, color: Colors.textMuted },
  amount: {
    ...Typography.headingLarge,
    color: Colors.textPrimary,
    marginTop: 4,
  },
  sub: { ...Typography.captionSmall, color: Colors.textMuted, marginTop: 4 },
  changePill: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  changeText: { ...Typography.captionSmall, fontWeight: '700' },
});

export default SummaryCard;
