import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';

export interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  containerStyle?: ViewStyle;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({
  containerStyle,
  leadingIcon,
  trailingIcon,
  placeholder = 'Search',
  ...inputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leading}>
        {leadingIcon ?? <Text style={styles.icon}>🔍</Text>}
      </View>
      <TextInput
        {...inputProps}
        placeholder={placeholder}
        placeholderTextColor={Colors.textMuted}
        style={styles.input}
      />
      {trailingIcon ? <View style={styles.trailing}>{trailingIcon}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    height: 46,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  leading: { marginRight: Spacing.sm },
  trailing: { marginLeft: Spacing.sm },
  icon: { fontSize: 16, opacity: 0.7 },
  input: {
    flex: 1,
    color: Colors.textPrimary,
    ...Typography.bodyMedium,
    paddingVertical: 0,
  },
});

export default SearchBar;
