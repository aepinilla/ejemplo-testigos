import { YellowScreenLayout } from '@/components/layouts';
import { PrimaryButton } from '@/components/ui';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function StartScreen() {
  const router = useRouter();

  const handleWalletLogin = () => {
    console.log('Continue with Wallet');
    router.push('/(tabs)');
  };


  return (
    <YellowScreenLayout>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="Continue with Wallet"
          onPress={handleWalletLogin}
        />
      </View>
    </YellowScreenLayout>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    gap: 10,
  },
});
