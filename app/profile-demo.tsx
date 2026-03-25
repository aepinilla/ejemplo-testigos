import { WhiteScreenLayout } from '@/components/layouts';
import { ProgressBar } from '@/components/ui';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProfileDemoScreen() {
  const router = useRouter();

  return (
    <WhiteScreenLayout scrollable>
      <View style={styles.container}>
        <View style={styles.profileImage} />
        
        <Text style={styles.name}>John Doe</Text>

        <View style={styles.profileStrengthContainer}>
          <Text style={styles.profileStrength}>Profile Strength</Text>
          <ProgressBar progress={20} />
        </View>

        <View style={styles.profileStepsContainer}>
          <Text style={styles.sectionTitle}>Complete Your Profile</Text>
          
          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Add Personal Data</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>

          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Confirm Identity</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>

          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Create Recovery Phrase</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>

          <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Setup Guardians</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>
        </View>

        <View style={styles.cardsContainer}>
          <Text style={styles.sectionTitle}>Available Roles</Text>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Observer</Text>
            <Text style={styles.cardDescription}>
              Monitor and report on election processes
            </Text>
            <Pressable style={styles.seeRolesButton}>
              <Text style={styles.buttonText}>View Details</Text>
            </Pressable>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Validator</Text>
            <Text style={styles.cardDescription}>
              Validate election results and data
            </Text>
            <Pressable style={styles.seeRolesButton}>
              <Text style={styles.buttonText}>View Details</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </WhiteScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    backgroundColor: Colors.neutral.borderGray,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fonts.bold,
    marginBottom: 20,
  },
  profileStrengthContainer: {
    marginTop: 20,
    width: 310,
    alignItems: 'center',
  },
  profileStrength: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.regular,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
  profileStepsContainer: {
    marginTop: 20,
    width: 310,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fonts.bold,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginVertical: 5,
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 10,
  },
  pressableText: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.fonts.regular,
  },
  arrow: {
    fontSize: Typography.sizes.lg,
  },
  cardsContainer: {
    marginTop: 30,
    width: 310,
  },
  card: {
    backgroundColor: Colors.neutral.white,
    borderColor: Colors.neutral.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
  },
  cardTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fonts.bold,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: Typography.sizes.sm,
    color: Colors.neutral.textGray,
    fontFamily: Typography.fonts.regular,
    marginBottom: 12,
  },
  seeRolesButton: {
    backgroundColor: Colors.primary.yellow,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontFamily: Typography.fonts.regular,
    fontSize: Typography.sizes.sm,
  },
});
