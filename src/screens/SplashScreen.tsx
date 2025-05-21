import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Or your specific navigation import
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { supabase } from '@/lib/supabase'; // Corrected path

// Define your navigation prop types if using TypeScript and React Navigation
// type SplashScreenNavigationProp = StackNavigationProp<YourRootStackParamList, 'Splash'>;

const SplashScreen = () => {
  // const navigation = useNavigation<SplashScreenNavigationProp>();
  const { t } = useTranslation(); // Initialize useTranslation
  const navigation = useNavigation<any>(); // Using any for now for simplicity

  useEffect(() => {
    const checkAuth = async () => {
      // Check for active Supabase session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // Simulate some loading time if needed
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (session) {
        // User is authenticated
        // Navigate to the main app screen (e.g., 'Home') or onboarding if not completed
        console.log('User is authenticated, navigating to Home (placeholder)');
        // navigation.replace('Home'); // Replace with your actual main app screen
        navigation.replace('OnboardingStep1Role'); // For now, go to onboarding for testing
      } else {
        // User is not authenticated
        console.log('User is not authenticated, navigating to Login');
        navigation.replace('Login'); // Replace with your actual login screen name
      }
    };

    checkAuth();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>{t('splashScreen.appName')}</Text>
      <Text style={styles.textSmall}>{t('splashScreen.loading')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    // Add Alef font here once configured
  },
  textSmall: {
    marginTop: 8,
    fontSize: 16,
    // Add Alef font here
  },
});

export default SplashScreen;
