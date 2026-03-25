import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { YellowScreenLayout } from '@/components/layouts';
import { PrimaryButton, TextInput } from '@/components/ui';
import { Typography } from '@/constants/typography';

export default function EnterNameScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim()) {
      console.log('Name entered:', name);
      router.push('/(tabs)');
    }
  };

  return (
    <YellowScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a nick name</Text>
        <TextInput
          placeholder="Write a nick name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="Continue"
          onPress={handleContinue}
          disabled={!name.trim()}
        />
      </View>
    </YellowScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 310,
    justifyContent: 'center',
  },
  title: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fonts.bold,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
