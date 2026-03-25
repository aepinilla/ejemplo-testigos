import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';

interface SecondaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function SecondaryButton({ label, onPress, style }: SecondaryButtonProps) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.button.secondary,
    borderColor: Colors.button.secondaryBorder,
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 310,
    marginTop: 30,
  },
  text: {
    color: Colors.button.secondaryText,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    letterSpacing: Typography.letterSpacing.wide,
    fontFamily: Typography.fonts.bold,
  },
});
