import React from 'react';
import { View, StyleSheet, ScrollView, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

interface WhiteScreenLayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
  contentStyle?: ViewStyle;
}

export function WhiteScreenLayout({
  children,
  scrollable = false,
  contentStyle,
}: WhiteScreenLayoutProps) {
  const content = (
    <View style={[styles.container, contentStyle]}>
      {children}
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {content}
      </ScrollView>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: Colors.neutral.white,
    padding: 20,
  },
});
