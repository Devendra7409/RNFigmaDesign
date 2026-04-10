import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors, Spacing, Typography } from '../../constants/theme';

export interface SectionTitleProps {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
  style?: ViewStyle;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  actionLabel,
  onPressAction,
  style,
}) => {
  return (
    <View style={[styles.row, style]}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction} activeOpacity={0.7}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  title: { ...Typography.headingMedium, color: Colors.textPrimary },
  action: { ...Typography.captionSmall, color: Colors.gold, fontWeight: '600' },
});

export default SectionTitle;
