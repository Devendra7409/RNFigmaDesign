import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export interface TabIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/**
 * Thin line icons for the bottom tab bar.
 * All icons are 24x24 viewBox, stroke-based, so they scale to any size
 * and color via props.
 */

export const HomeIcon: React.FC<TabIconProps> = ({
  size = 24,
  color = '#fff',
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 10.5 12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20v-9.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.5 21.5v-6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const InvestorsIcon: React.FC<TabIconProps> = ({
  size = 24,
  color = '#fff',
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="9"
      cy="8"
      r="3.25"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M3 20c0-2.9 2.7-5.25 6-5.25S15 17.1 15 20"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M16 4.5a3.25 3.25 0 0 1 0 6.5M17 14.9c2.3.55 4 2.35 4 4.6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const EarningsIcon: React.FC<TabIconProps> = ({
  size = 24,
  color = '#fff',
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3.5 8.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 9.5V6a1.5 1.5 0 0 1 1.5-1.5h11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <Circle cx="17" cy="13.5" r="1.25" fill={color} />
  </Svg>
);

export const ProfileIcon: React.FC<TabIconProps> = ({
  size = 24,
  color = '#fff',
  strokeWidth = 1.8,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="8"
      r="3.75"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M4.5 20.5c0-3.6 3.35-6.5 7.5-6.5s7.5 2.9 7.5 6.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export const TAB_ICONS: Record<string, React.FC<TabIconProps>> = {
  Home: HomeIcon,
  Investors: InvestorsIcon,
  Earnings: EarningsIcon,
  Profile: ProfileIcon,
};