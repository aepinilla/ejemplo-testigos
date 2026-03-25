import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';

interface CustomTextInputProps extends TextInputProps {
  placeholder?: string;
}

export function TextInput({ placeholder, ...props }: CustomTextInputProps) {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.neutral.mediumGray}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: Colors.neutral.lightBorder,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: Typography.sizes.base,
    backgroundColor: Colors.neutral.white,
    marginBottom: 20,
    fontFamily: Typography.fonts.regular,
  },
});
