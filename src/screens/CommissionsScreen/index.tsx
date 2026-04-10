import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import { Colors } from '../../constants/theme';
import { styles } from './styles';

const TIMELINE = [
  { key: 't1', label: 'Yesterday', amount: '+$8.42' },
  { key: 't2', label: 'This Month (Mar)', amount: '+$380.40' },
  { key: 't3', label: 'Last Month (Feb)', amount: '+$310.20' },
];

const TIERS = [
  { label: '₹2L', active: false },
  { label: '₹5L', active: false },
  { label: '₹20L', active: true },
  { label: '₹50L', active: false },
  { label: '₹1cr', active: false },
];

const CommissionsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const onPressBack = () => navigation.navigate('Home');
  const onPressHistory = () => {};
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <AppHeader
        variant="title"
        title="Commissions"
        showBack
        onPressBack={onPressBack}
        showNotification={false}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ----- Available Balance hero ----- */}
        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>Available Balance</Text>
          <Text style={styles.heroAmount}>₹2,450.00</Text>
          <Text style={styles.heroSub}>5,450 USDT</Text>

          <TouchableOpacity style={styles.withdrawBtn} activeOpacity={0.85}>
            <Text style={styles.withdrawText}>Withdraw to Bank</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.addLink}>Add to your investor App</Text>
          </TouchableOpacity>
        </View>

        {/* ----- Two mini stat pills ----- */}
        <View style={styles.miniStatsRow}>
          <View style={styles.miniStatCard}>
            <Text style={styles.miniStatLabel}>Total Earned (Lifetime)</Text>
            <Text
              style={[
                styles.miniStatValue,
                { color: Colors.profitGreen },
              ]}
            >
              ₹3,2000.80
            </Text>
            <Text
              style={[styles.miniStatSub, { color: Colors.profitGreen }]}
            >
              $3,200.80
            </Text>
          </View>
          <View style={styles.miniStatCard}>
            <Text style={styles.miniStatLabel}>Withdrawn</Text>
            <Text
              style={[styles.miniStatValue, { color: Colors.textPrimary }]}
            >
              ₹7500.00
            </Text>
            <Text style={[styles.miniStatSub, { color: Colors.textMuted }]}>
              $750.00
            </Text>
          </View>
        </View>

        {/* ----- Commission Timeline ----- */}
        <View style={styles.sectionLabelRow}>
          <Text style={styles.sectionLabel}>Commission Timeline</Text>
        </View>
        <View style={styles.timelineCard}>
          {TIMELINE.map((row, idx) => (
            <View
              key={row.key}
              style={[
                styles.timelineRow,
                idx !== 0 && styles.timelineRowBorder,
              ]}
            >
              <Text style={styles.timelineTitle}>{row.label}</Text>
              <Text style={styles.timelineAmount}>{row.amount}</Text>
            </View>
          ))}
        </View>

        {/* ----- Breakdown ----- */}
        <View style={styles.sectionLabelRow}>
          <Text style={styles.sectionLabel}>Breakdown</Text>
        </View>
        <View style={styles.breakdownRow}>
          <View style={styles.breakdownCard}>
            <Text style={styles.breakdownLabel}>One-Time Earned</Text>
            <Text style={styles.breakdownValue}>$1,800</Text>
          </View>
          <View style={styles.breakdownCard}>
            <Text style={styles.breakdownLabel}>Recurring Accrued</Text>
            <Text style={styles.breakdownValue}>$650.80</Text>
          </View>
        </View>

        {/* ----- Monthly Average ----- */}
        <View style={styles.sectionLabelRow}>
          <Text style={styles.sectionLabel}>Monthly Average</Text>
        </View>
        <View style={styles.avgCard}>
          <View style={styles.avgHeaderRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.avgLabel}>Avg Commission / Month</Text>
              <Text style={styles.avgAmount}>$320.08</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.avgBasedOn}>Based on</Text>
              <Text style={styles.avgBasedOn}>10 months</Text>
            </View>
          </View>

          <View style={styles.avgDivider} />

          <View style={styles.avgSplitRow}>
            <View style={styles.avgSplitCol}>
              <Text style={styles.avgSplitLabel}>Avg One-Time / mo</Text>
              <Text style={styles.avgSplitValue}>$180.00</Text>
            </View>
            <View style={styles.avgSplitCol}>
              <Text style={styles.avgSplitLabel}>Avg Recurring / mo</Text>
              <Text style={styles.avgSplitValue}>$140.08</Text>
            </View>
          </View>
        </View>

        {/* ----- Target Milestones ----- */}
        <View style={styles.sectionLabelRow}>
          <Text style={styles.sectionLabel}>Target Milestones</Text>
        </View>
        <View style={styles.milestoneCard}>
          <View style={styles.milestoneHeaderRow}>
            <Text style={styles.milestoneTitle}>This Month's Commission</Text>
            <Text style={styles.milestoneAmount}>₹27,720</Text>
          </View>
          <View style={styles.milestoneTrack}>
            <View style={[styles.milestoneFill, { width: '14%' }]} />
          </View>
          <View style={styles.milestoneFooterRow}>
            <Text style={styles.milestoneFooterSide}>₹0</Text>
            <Text style={styles.milestoneFooterMid}>
              14% · ₹1,72,280 to reach ₹2L
            </Text>
            <Text style={styles.milestoneFooterSide}>₹2L</Text>
          </View>

          <View style={styles.chainRow}>
            {TIERS.map((tier, idx) => (
              <React.Fragment key={tier.label}>
                <View
                  style={[
                    styles.chainChip,
                    tier.active && styles.chainChipActive,
                  ]}
                >
                  <View
                    style={[
                      styles.chainDot,
                      tier.active && styles.chainDotActive,
                    ]}
                  />
                  <Text
                    style={[
                      styles.chainLabel,
                      tier.active && styles.chainLabelActive,
                    ]}
                  >
                    {tier.label}
                  </Text>
                </View>
                {idx < TIERS.length - 1 && (
                  <View style={styles.chainConnector} />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* ----- Full History button ----- */}
        <TouchableOpacity
          style={styles.historyBtn}
          activeOpacity={0.85}
          onPress={onPressHistory}
        >
          <Text style={styles.historyIcon}>▤</Text>
          <Text style={styles.historyText}>View Full Commission History</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommissionsScreen;
