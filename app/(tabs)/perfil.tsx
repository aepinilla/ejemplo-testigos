import { WhiteScreenLayout } from '@/components/layouts';
import { ProgressBar } from '@/components/ui';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <WhiteScreenLayout scrollable>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hola, <Text style={styles.name}>Elena</Text></Text>
        
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <View style={styles.profileIcon}>
                <Ionicons name="person" size={60} color={Colors.neutral.white} />
              </View>
            </View>
          </View>
          
          <Pressable style={styles.qrButton}>
            <Ionicons name="qr-code" size={24} color={Colors.primary.darkGray} />
          </Pressable>
        </View>

        <View style={styles.profileStrengthContainer}>
          <Text style={styles.profileStrengthTitle}>Fortaleza del Perfil</Text>
          <ProgressBar progress={25} width={280} />
          <Text style={styles.profileStrengthSubtitle}>
            Completa las secciones a continuación para un perfil más fuerte
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionItem}>
            <Text style={styles.actionText}>Datos Personales</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>Pendiente</Text>
              <Ionicons name="chevron-forward" size={16} color="#FF9900" />
            </View>
          </Pressable>

          <Pressable style={styles.actionItem}>
            <Text style={styles.actionText}>Escanear Cédula</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>Pendiente</Text>
              <Ionicons name="chevron-forward" size={16} color="#FF9900" />
            </View>
          </Pressable>

          <Pressable style={styles.actionItem}>
            <Text style={styles.actionText}>Frase Secreta</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>Pendiente</Text>
              <Ionicons name="chevron-forward" size={16} color="#FF9900" />
            </View>
          </Pressable>

          <Pressable style={styles.actionItem}>
            <Text style={styles.actionText}>Guardianes</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingText}>Pendiente</Text>
              <Ionicons name="chevron-forward" size={16} color="#FF9900" />
            </View>
          </Pressable>
        </View>
      </View>
    </WhiteScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: Typography.sizes.lg,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.textGray,
    marginBottom: 20,
  },
  name: {
    fontWeight: Typography.weights.bold,
    fontFamily: Typography.fonts.bold,
    color: Colors.neutral.black,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.neutral.borderGray,
    borderWidth: 3,
    borderColor: Colors.neutral.mediumGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrButton: {
    marginTop: 5,
  },
  profileStrengthContainer: {
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    marginBottom: 25,
    paddingVertical: 15,
  },
  profileStrengthTitle: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.fonts.bold,
    color: Colors.neutral.black,
    marginBottom: 10,
  },
  profileStrengthSubtitle: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.textGray,
    textAlign: 'center',
    marginTop: 10,
  },
  actionsContainer: {
    width: '100%',
    maxWidth: 300,
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral.lightBorder,
  },
  actionText: {
    fontSize: Typography.sizes.base,
    fontFamily: Typography.fonts.regular,
    color: Colors.neutral.black,
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  pendingText: {
    fontSize: Typography.sizes.sm,
    fontFamily: Typography.fonts.regular,
    color: '#FF9900',
  },
});
