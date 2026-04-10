import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BottomTabBar from '../components/common/BottomTabBar';
import { Colors } from '../constants/theme';
import CommissionsScreen from '../screens/CommissionsScreen';
import HomeScreen from '../screens/HomeScreen';
import InvestorDetailScreen from '../screens/InvestorDetailScreen';
import MyInvestorsScreen from '../screens/MyInvestorsScreen';

/* ------------------------- types ------------------------- */

export type RootStackParamList = {
  Tabs: undefined;
  InvestorDetail: { investorId: string };
};

export type TabParamList = {
  Home: undefined;
  Investors: undefined;
  Earnings: undefined;
  Profile: undefined;
};

export type RootStackNav = NativeStackNavigationProp<RootStackParamList>;

/* ------------------------- theme ------------------------- */

const navTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
    card: Colors.background,
    text: Colors.textPrimary,
    border: Colors.border,
    primary: Colors.gold,
    notification: Colors.gold,
  },
};

/* ----------------- placeholder screens ----------------- */

const PlaceholderScreen: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>{title}</Text>
    <Text style={styles.placeholderSub}>Coming soon</Text>
  </View>
);

const ProfileScreen: React.FC = () => <PlaceholderScreen title="Profile" />;

/* ------------------- tab-wrapped screens ----------------- */

const HomeTabScreen: React.FC = () => <HomeScreen />;
const InvestorsTabScreen: React.FC = () => <MyInvestorsScreen />;
const EarningsTabScreen: React.FC = () => <CommissionsScreen />;

/* ------------------------- tabs ------------------------- */

const Tab = createBottomTabNavigator<TabParamList>();

const TabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        animation: 'none',
        lazy: true,
        sceneStyle: { backgroundColor: Colors.background },
      }}
    >
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Investors" component={InvestorsTabScreen} />
      <Tab.Screen name="Earnings" component={EarningsTabScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

/* ------------------------- root ------------------------- */

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <RootStack.Screen name="Tabs" component={TabsNavigator} />
        <RootStack.Screen
          name="InvestorDetail"
          component={InvestorDetailScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    paddingBottom: 100,
  },
  placeholderText: {
    color: Colors.gold,
    fontSize: 22,
    fontWeight: '800',
  },
  placeholderSub: {
    color: Colors.textMuted,
    fontSize: 13,
    marginTop: 8,
  },
});

export default AppNavigator;
