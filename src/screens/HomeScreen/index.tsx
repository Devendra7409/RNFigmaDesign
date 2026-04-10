import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionGridButton from '../../components/common/ActionGridButton';
import AppHeader from '../../components/common/AppHeader';
import { Colors } from '../../constants/theme';
import { currentUser } from '../../data/dummyData';
import { formatCurrency } from '../../utils/helpers';
import { styles } from './styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const goInvestors = () => navigation.navigate('Investors');
  const goEarnings = () => navigation.navigate('Earnings');
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <AppHeader
        greeting="Hi,"
        userName={currentUser.name}
        handle="@rahul_kapoor"
        notificationCount={3}
        onPressNotification={() => {}}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ----- Commission Balance card ----- */}
        <View style={styles.commissionCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardLabel}>Commission Balance</Text>
          </View>

          <Text style={styles.bigAmount}>{formatCurrency(2450)}</Text>
          <Text style={styles.subAmount}>5,450 USDT</Text>

          <View style={styles.innerDivider} />

          <View style={styles.inlineStatsRow}>
            <View style={styles.inlineStatCol}>
              <Text style={styles.inlineStatLabel}>One Time</Text>
              <Text style={styles.inlineStatValue}>₹1,29,504</Text>
              <Text style={styles.inlineStatSub}>$1500.00</Text>
            </View>
            <View style={styles.inlineStatCol}>
              <Text style={styles.inlineStatLabel}>Recurring</Text>
              <Text style={styles.inlineStatValue}>₹50,616</Text>
              <Text style={styles.inlineStatSub}>$650.80</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionGap} />

        {/* ----- Lifetime Earnings card ----- */}
        <View style={styles.earningCard}>
          <Text style={styles.earningLabel}>Lifetime Earnings</Text>
          <Text style={styles.earningBigAmount}>{formatCurrency(4820.6)}</Text>
          <Text style={styles.subAmount}>5,450 USDT</Text>

          <View style={styles.innerDivider} />

          <View style={styles.threeColRow}>
            <View style={styles.threeCol}>
              <Text style={styles.inlineStatLabel}>Yesterday</Text>
              <Text style={styles.threeColValue}>₹3,17,010</Text>
              <Text style={styles.threeColSub}>$8.42</Text>
            </View>
            <View style={styles.threeCol}>
              <Text style={styles.inlineStatLabel}>This Month</Text>
              <Text style={styles.threeColValue}>₹3,17,010</Text>
              <Text style={styles.threeColSub}>$380.40</Text>
            </View>
            <View style={styles.threeCol}>
              <Text style={styles.inlineStatLabel}>Last Month</Text>
              <Text style={styles.threeColValue}>₹3,17,010</Text>
              <Text style={styles.threeColSub}>$310.20</Text>
            </View>
          </View>
        </View>

        {/* ----- Stat strip ----- */}
        <View style={styles.statStripRow}>
          <View style={styles.statStripCard}>
            <Text style={styles.statStripValue}>12</Text>
            <Text style={styles.statStripLabel}>Investors</Text>
          </View>
          <View style={styles.statStripCard}>
            <Text style={styles.statStripValue}>$48.2K</Text>
            <Text style={styles.statStripLabel}>Total AUM</Text>
          </View>
          <View style={styles.statStripCard}>
            <Text style={styles.statStripValueGreen}>+18%</Text>
            <Text style={styles.statStripLabel}>Cum. Return</Text>
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
            {[
              { label: '₹2L', active: false },
              { label: '₹5L', active: false },
              { label: '₹20L', active: true },
              { label: '₹50L', active: false },
              { label: '₹1cr', active: false },
            ].map((tier, idx, arr) => (
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
                {idx < arr.length - 1 && (
                  <View style={styles.chainConnector} />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* ----- Quick Actions ----- */}
        <View style={styles.sectionLabelRow}>
          <Text style={styles.sectionLabel}>Quick Actions</Text>
        </View>

        <View style={styles.actionsGrid}>
          <View style={styles.actionsRow}>
            <ActionGridButton
              title="Withdraw"
              subtitle="Transfer to bank"
              icon="↓"
              onPress={goEarnings}
            />
            <ActionGridButton
              title="Share"
              subtitle="Invite new client"
              icon="⌁"
            />
            <ActionGridButton
              title="Transactions"
              subtitle="View all"
              icon="☰"
            />
          </View>
          <View style={styles.actionsRow}>
            <ActionGridButton
              title="Commissions"
              subtitle="View breakdown"
              icon="▦"
              onPress={goEarnings}
            />
            <ActionGridButton
              title="Baskets"
              subtitle="Browse all"
              icon="◉"
              onPress={goInvestors}
            />
            <ActionGridButton
              title="Calculator"
              subtitle="SIP & returns"
              icon="▤"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
