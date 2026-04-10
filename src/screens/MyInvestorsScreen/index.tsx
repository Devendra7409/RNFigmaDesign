import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../components/common/AppHeader';
import FilterTabs, { FilterTabItem } from '../../components/common/FilterTabs';
import InvestorCard, {
  InvestorItemData,
} from '../../components/common/InvestorCard';
import SearchBar from '../../components/common/SearchBar';
import { Colors } from '../../constants/theme';
import { investors } from '../../data/dummyData';
import { styles } from './styles';

type InvestorFilter = 'all' | 'active' | 'dormant';

const MyInvestorsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const onPressBack = () => navigation.navigate('Home');
  const onPressInvestor = (item: InvestorItemData) =>
    navigation.navigate('InvestorDetail', { investorId: item.id });
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<InvestorFilter>('all');

  const counts = useMemo(
    () => ({
      all: investors.length,
      active: investors.filter(i => i.status === 'active').length,
      dormant: investors.filter(i => i.status === 'dormant').length,
    }),
    [],
  );

  const tabs: FilterTabItem<InvestorFilter>[] = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'dormant', label: 'Dormant', count: counts.dormant },
  ];

  const filtered: InvestorItemData[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    return investors.filter(i => {
      const matchesFilter = filter === 'all' ? true : i.status === filter;
      const matchesQuery = q.length === 0 || i.name.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <AppHeader
        variant="title"
        title="My Investors"
        showBack
        onPressBack={onPressBack}
        notificationCount={3}
      />

      <View style={styles.container}>
        <View style={styles.searchWrap}>
          <SearchBar
            placeholder="Search transaction"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <View style={styles.filterWrap}>
          <FilterTabs<InvestorFilter>
            items={tabs}
            activeKey={filter}
            onChange={setFilter}
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <InvestorCard data={item} onPress={onPressInvestor} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No investors found</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default MyInvestorsScreen;
