import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

export interface AppCardProps extends ViewProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof Spacing;
  radius?: keyof typeof Radius;
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
}

const AppCard: React.FC<AppCardProps> = ({
  variant = 'default',
  padding = 'lg',
  radius = 'lg',
  style,
  children,
  ...rest
}) => {
  const containerStyle: ViewStyle = {
    backgroundColor:
      variant === 'elevated' ? Colors.cardElevated : Colors.card,
    borderRadius: Radius[radius],
    padding: Spacing[padding],
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: variant === 'outlined' ? Colors.border : 'transparent',
  };

  return (
    <View style={[styles.base, containerStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
});

export default AppCard;
