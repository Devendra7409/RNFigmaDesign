import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface FilterTabItem<T extends string> {
  key: T;
  label: string;
  count?: number;
}

export interface FilterTabsProps<T extends string> {
  items: FilterTabItem<T>[];
  activeKey: T;
  onChange: (key: T) => void;
}

function FilterTabs<T extends string>({
  items,
  activeKey,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <View style={styles.row}>
      {items.map(item => {
        const active = item.key === activeKey;
        return (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.85}
            onPress={() => onChange(item.key)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
              {item.label}
            </Text>
            {typeof item.count === 'number' && (
              <View style={[styles.countPill, active && styles.countPillActive]}>
                <Text
                  style={[styles.countText, active && styles.countTextActive]}
                >
                  {item.count}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: Colors.surfaceAlt,
    borderRadius: Radius.pill,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm + 2,
    borderRadius: Radius.pill,
  },
  tabActive: {
    backgroundColor: Colors.gold,
  },
  label: { ...Typography.label, color: Colors.textSecondary },
  labelActive: { color: Colors.black, fontWeight: '700' },
  countPill: {
    marginLeft: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: Radius.pill,
    backgroundColor: Colors.surface,
  },
  countPillActive: { backgroundColor: 'rgba(0,0,0,0.18)' },
  countText: { fontSize: 10, color: Colors.textSecondary, fontWeight: '600' },
  countTextActive: { color: Colors.black },
});

export default FilterTabs;
