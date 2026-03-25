import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.neutral.white,
    borderColor: Colors.neutral.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
    maxWidth: 310,
  },
});
