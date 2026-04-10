import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface InvestmentData {
  id: string;
  planName: string;
  invested: number;
  currentValue: number;
  returnPct: number;
  startDate: string;
}

export interface InvestmentItemProps {
  data: InvestmentData;
  onPress?: () => void;
  currency?: string;
}

const fmt = (n: number, c = '₹') =>
  `${c}${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

const InvestmentItem: React.FC<InvestmentItemProps> = ({
  data,
  onPress,
  currency = '₹',
}) => {
  const isProfit = data.returnPct >= 0;
  const color = isProfit ? Colors.profitGreen : Colors.lossRed;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name} numberOfLines={1}>
            {data.planName}
          </Text>
          <Text style={styles.date}>Started {data.startDate}</Text>
        </View>
        <Text style={[styles.returnTxt, { color }]}>
          {isProfit ? '+' : ''}
          {data.returnPct.toFixed(2)}%
        </Text>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Invested</Text>
          <Text style={styles.metricValue}>{fmt(data.invested, currency)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={[styles.metric, { alignItems: 'flex-end' }]}>
          <Text style={styles.metricLabel}>Current</Text>
          <Text style={styles.metricValue}>{fmt(data.currentValue, currency)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  name: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  date: { ...Typography.captionSmall, color: Colors.textMuted, marginTop: 2 },
  returnTxt: { ...Typography.bodyMedium, fontWeight: '700' },
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    borderRadius: Radius.md,
    padding: Spacing.md,
  },
  metric: { flex: 1 },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: Colors.divider,
    marginHorizontal: Spacing.md,
  },
  metricLabel: { ...Typography.captionSmall, color: Colors.textMuted },
  metricValue: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
    marginTop: 2,
  },
});

export default InvestmentItem;
