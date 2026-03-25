import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

interface ProgressBarProps {
  progress: number;
  width?: number;
}

export function ProgressBar({ progress, width = 310 }: ProgressBarProps) {
  const fillWidth = (progress / 100) * width;

  return (
    <View style={[styles.container, { width }]}>
      <View style={[styles.fill, { width: fillWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.primary.teal,
  },
});
