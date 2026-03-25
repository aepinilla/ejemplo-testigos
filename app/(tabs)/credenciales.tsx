import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WhiteScreenLayout } from '@/components/layouts';
import { Typography } from '@/constants/typography';

export default function CredencialesScreen() {
  return (
    <WhiteScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Credenciales</Text>
        <Text style={styles.subtitle}>Tus credenciales aparecerán aquí</Text>
      </View>
    </WhiteScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.fonts.bold,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.fonts.regular,
  },
});
