import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors, Radius, Spacing } from '../../constants/theme';
import { TAB_ICONS } from './TabIcons';

const LABELS: Record<string, string> = {
  Home: 'HOME',
  Investors: 'INVESTORS',
  Earnings: 'EARNINGS',
  Profile: 'PROFILE',
};

interface TabItemProps {
  name: string;
  isFocused: boolean;
  onPress: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ name, isFocused, onPress }) => {
  const progress = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(progress, {
      toValue: isFocused ? 1 : 0,
      useNativeDriver: false,
      damping: 14,
      stiffness: 200,
      mass: 0.6,
    }).start();
  }, [isFocused, progress]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.96, 1],
  });
  const bg = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(245,196,81,0)', 'rgba(245,196,81,0.12)'],
  });
  const border = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(245,196,81,0)', 'rgba(245,196,81,0.28)'],
  });

  const Icon = TAB_ICONS[name];
  const color = isFocused ? Colors.gold : Colors.textMuted;

  return (
    <TouchableOpacity
      style={styles.tabHit}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Animated.View
        style={[
          styles.tabContent,
          {
            transform: [{ scale }],
            backgroundColor: bg,
            borderColor: border,
          },
        ]}
      >
        {Icon ? <Icon size={24} color={color} /> : null}
        <Animated.Text
          style={[
            styles.label,
            { color, fontWeight: isFocused ? '700' : '500' },
          ]}
        >
          {LABELS[name] ?? name.toUpperCase()}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.wrap} pointerEvents="box-none">
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabItem
              key={route.key}
              name={route.name}
              isFocused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm + 2,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  tabHit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: Radius.md,
    borderWidth: 1,
    minWidth: 64,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 0.6,
  },
});

export default BottomTabBar;
