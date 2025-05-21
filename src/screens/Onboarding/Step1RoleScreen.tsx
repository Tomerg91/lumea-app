import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

// type OnboardingRoleScreenNavigationProp = StackNavigationProp<YourRootStackParamList, 'OnboardingStep1Role'>;

const Step1RoleScreen = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  // const navigation = useNavigation<OnboardingRoleScreenNavigationProp>();
  const navigation = useNavigation<any>(); // Using any for now

  const [selectedRole, setSelectedRole] = useState<'coach' | 'client' | null>(
    null,
  );

  const handleSelectRole = (role: 'coach' | 'client') => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      console.log(`Selected role: ${selectedRole}`);
      // Navigate to the next onboarding step or main app
      // navigation.navigate('OnboardingStep2', { role: selectedRole });
      Alert.alert(
        t('common.thankYou', 'Thank You'),
        `${t('onboardingRoleScreen.youSelected', 'You selected:')} ${t(`onboardingRoleScreen.${selectedRole}`)}`,
      );
    } else {
      Alert.alert(
        t('common.error', 'Error'),
        t(
          'onboardingRoleScreen.selectRoleError',
          'Please select a role to continue.',
        ),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: isRTL ? 'right' : 'left' }]}>
        {t('onboardingRoleScreen.title')}
      </Text>

      <TouchableOpacity
        style={[
          styles.roleButton,
          selectedRole === 'coach' && styles.selectedRoleButton,
          // isRTL && styles.rtlButtonContainer // For potential flex direction changes
        ]}
        onPress={() => handleSelectRole('coach')}>
        <Text
          style={[
            styles.roleButtonText,
            selectedRole === 'coach' && styles.selectedRoleButtonText,
          ]}>
          {t('onboardingRoleScreen.coach')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.roleButton,
          selectedRole === 'client' && styles.selectedRoleButton,
          // isRTL && styles.rtlButtonContainer
        ]}
        onPress={() => handleSelectRole('client')}>
        <Text
          style={[
            styles.roleButtonText,
            selectedRole === 'client' && styles.selectedRoleButtonText,
          ]}>
          {t('onboardingRoleScreen.client')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>{t('common.continue')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    // fontFamily: 'Alef-Bold' // TODO: Add font
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  roleButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  selectedRoleButton: {
    backgroundColor: '#007AFF',
  },
  roleButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    // fontFamily: 'Alef-Regular' // TODO: Add font
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  selectedRoleButtonText: {
    color: '#FFFFFF',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    // fontFamily: 'Alef-Bold' // TODO: Add font
  },
});

export default Step1RoleScreen;
