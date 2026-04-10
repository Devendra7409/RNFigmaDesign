import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import StatusBadge, { StatusType } from './StatusBadge';

export interface InvestorItemData {
  id: string;
  name: string;
  joinedOn: string;
  invested: number;
  currentValue: number;
  returnPct: number;
  status: StatusType;
  avatar?: ImageSourcePropType;
}

export interface InvestorCardProps {
  data: InvestorItemData;
  onPress?: (item: InvestorItemData) => void;
  currency?: string;
}

const formatMoney = (n: number, currency = '₹') =>
  `${currency}${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

const InvestorCard: React.FC<InvestorCardProps> = ({
  data,
  onPress,
  currency = '₹',
}) => {
  const isProfit = data.returnPct >= 0;
  const returnColor = isProfit ? Colors.profitGreen : Colors.lossRed;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onPress?.(data)}
      style={styles.card}
    >
      <View style={styles.topRow}>
        <View style={styles.avatarWrap}>
          {data.avatar ? (
            <Image source={data.avatar} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarFallback]}>
              <Text style={styles.avatarInitial}>{data.name.charAt(0)}</Text>
            </View>
          )}
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.name} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.date}>Joined {data.joinedOn}</Text>
        </View>

        <StatusBadge status={data.status} />
      </View>

      <View style={styles.divider} />

      <View style={styles.metricsRow}>
        <View style={styles.metricCol}>
          <Text style={styles.metricLabel}>Invested</Text>
          <Text style={styles.metricValue}>
            {formatMoney(data.invested, currency)}
          </Text>
        </View>
        <View style={styles.metricCol}>
          <Text style={styles.metricLabel}>Current</Text>
          <Text style={styles.metricValue}>
            {formatMoney(data.currentValue, currency)}
          </Text>
        </View>
        <View style={[styles.metricCol, styles.metricRight]}>
          <Text style={styles.metricLabel}>Return</Text>
          <Text style={[styles.metricValue, { color: returnColor }]}>
            {isProfit ? '+' : ''}
            {data.returnPct.toFixed(2)}%
          </Text>
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
  topRow: { flexDirection: 'row', alignItems: 'center' },
  avatarWrap: {
    width: 44,
    height: 44,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 2,
  },
  avatar: { width: '100%', height: '100%', borderRadius: Radius.pill },
  avatarFallback: {
    backgroundColor: Colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: { ...Typography.headingMedium, color: Colors.gold },
  infoBlock: { flex: 1, marginLeft: Spacing.md },
  name: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  date: { ...Typography.captionSmall, color: Colors.textMuted, marginTop: 2 },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.md,
  },
  metricsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  metricCol: { flex: 1 },
  metricRight: { alignItems: 'flex-end' },
  metricLabel: {
    ...Typography.captionSmall,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  metricValue: {
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
});

export default InvestorCard;
