import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [idNumber, setIdNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleIdSubmit = () => {
    if (idNumber.trim().length >= 6) {
      Keyboard.dismiss();
      router.push('/perfil');
    }
  };

  const isValid = idNumber.trim().length >= 6;

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ingresa tu número de cédula</Text>
        
        <TextInput
          style={[
            styles.inputField,
            isFocused && styles.inputFieldFocused,
            isValid && styles.inputFieldValid
          ]}
          placeholder="Ej: 1234567890"
          placeholderTextColor={Colors.neutral.mediumGray}
          value={idNumber}
          onChangeText={setIdNumber}
          keyboardType="numeric"
          maxLength={15}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={handleIdSubmit}
          returnKeyType="done"
          autoComplete="off"
          autoCorrect={false}
          editable={true}
          selectTextOnFocus={true}
        />

        <Text style={styles.helperText}>
          Ingresa tu número de identificación para continuar
        </Text>

        <Pressable 
          style={[styles.continueButton, !isValid && styles.continueButtonDisabled]}
          onPress={handleIdSubmit}
          disabled={!isValid}
        >
          <Text style={[styles.continueButtonText, !isValid && styles.continueButtonTextDisabled]}>
            Continuar
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.yellow,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  inputContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  label: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.bold,
    color: Colors.neutral.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    maxWidth: 310,
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.neutral.lightBorder,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.black,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputFieldFocused: {
    borderColor: Colors.primary.darkGray,
    borderWidth: 3,
  },
  inputFieldValid: {
    borderColor: Colors.primary.teal,
  },
  helperText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.textGray,
    textAlign: 'center',
    marginBottom: 25,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 310,
    backgroundColor: Colors.primary.darkGray,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  continueButtonDisabled: {
    backgroundColor: Colors.neutral.lightGray,
  },
  continueButtonText: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.bold,
    color: Colors.neutral.white,
  },
  continueButtonTextDisabled: {
    color: Colors.neutral.mediumGray,
  },
});
