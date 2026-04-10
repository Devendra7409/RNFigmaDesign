import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import InvestmentItem from '../../components/common/InvestmentItem';
import SectionTitle from '../../components/common/SectionTitle';
import StatCard from '../../components/common/StatCard';
import SummaryCard from '../../components/common/SummaryCard';
import { Colors } from '../../constants/theme';
import { investorDetailById } from '../../data/dummyData';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { formatCurrency } from '../../utils/helpers';
import { styles } from './styles';

type DetailRoute = RouteProp<RootStackParamList, 'InvestorDetail'>;

const InvestorDetailScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<DetailRoute>();
  const investorId = route.params?.investorId ?? 'inv_01';
  const onPressBack = () => navigation.goBack();
  const investor = investorDetailById[investorId] ?? investorDetailById.inv_01;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <AppHeader
        variant="title"
        title="Investor Detail"
        showBack
        onPressBack={onPressBack}
        notificationCount={0}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileWrap}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>{investor.name.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{investor.name}</Text>
          <Text style={styles.meta}>Member since {investor.joinedOn}</Text>

          {investor.kycVerified && (
            <View style={styles.kycBadge}>
              <Text style={styles.kycCheck}>✓</Text>
              <Text style={styles.kycText}>KYC Verified</Text>
            </View>
          )}
        </View>

        <View style={styles.contactRow}>
          <TouchableOpacity style={styles.contactBtn} activeOpacity={0.85}>
            <Text style={styles.contactIcon}>☎</Text>
            <Text style={styles.contactText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactBtn} activeOpacity={0.85}>
            <Text style={styles.contactIcon}>✉</Text>
            <Text style={styles.contactText}>Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amountCard}>
          <View style={styles.amountCol}>
            <Text style={styles.amountLabel}>Invested</Text>
            <Text style={styles.amountValue}>
              {formatCurrency(investor.totalInvested, '₹', 0)}
            </Text>
          </View>
          <View style={styles.amountDivider} />
          <View style={styles.amountCol}>
            <Text style={styles.amountLabel}>Current</Text>
            <Text style={styles.amountValue}>
              {formatCurrency(investor.currentValue, '₹', 0)}
            </Text>
          </View>
        </View>

        <View style={styles.returnsRow}>
          <StatCard
            label="Total Returns"
            value={`+${investor.totalReturnsPct.toFixed(2)}%`}
            delta={formatCurrency(
              investor.currentValue - investor.totalInvested,
              '₹',
              0,
            )}
            deltaType="profit"
          />
          <StatCard
            label="This Month"
            value={formatCurrency(investor.earningsMonthly, '₹', 0)}
            delta="Earnings"
            deltaType="neutral"
          />
        </View>

        <View style={styles.section}>
          <SectionTitle title="Earnings" actionLabel="View all" />
          <SummaryCard
            label="Total Earnings"
            amount={formatCurrency(investor.totalEarnings, '₹', 0)}
            subLabel="Across all active plans"
            change={`+${investor.totalReturnsPct.toFixed(1)}%`}
            changeType="profit"
            accent="gold"
          />
        </View>

        <View style={styles.section}>
          <SectionTitle title="Investments" />
          {investor.portfolio.map(item => (
            <InvestmentItem key={item.id} data={item} />
          ))}
        </View>

        <TouchableOpacity style={styles.downloadBtn} activeOpacity={0.85}>
          <Text style={styles.downloadText}>⤓  Download Portfolio</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestorDetailScreen;
