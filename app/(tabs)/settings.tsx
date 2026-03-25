import { WhiteScreenLayout } from '@/components/layouts';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <WhiteScreenLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Configuración</Text>
          <Text style={styles.subtitle}>Administra tu cuenta y preferencias</Text>
          
          <Pressable style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutText}>Cerrar Sesión</Text>
          </Pressable>
        </View>
      </View>
    </WhiteScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: Typography.sizes.xl,
    fontFamily: Typography.fonts.bold,
    marginBottom: 10,
    color: Colors.neutral.black,
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.textGray,
    textAlign: 'center',
    marginBottom: 40,
  },
  signOutButton: {
    width: '100%',
    maxWidth: 310,
    backgroundColor: Colors.status.error,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutText: {
    color: Colors.neutral.white,
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.bold,
  },
});
