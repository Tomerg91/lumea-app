import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
  I18nManager,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '@/lib/supabase';

// type LoginScreenNavigationProp = StackNavigationProp<YourRootStackParamList, 'Login'>;

const LoginScreen = () => {
  const { t } = useTranslation();
  // const navigation = useNavigation<LoginScreenNavigationProp>();
  const navigation = useNavigation<any>(); // Using any for now

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Alert.alert(t('common.error', 'Error'), error.message);
    } else {
      // Navigation to Home/Main app will be handled by session listener or SplashScreen logic re-check
      // For now, explicitly navigate to onboarding as a placeholder after login
      navigation.replace('OnboardingStep1Role');
    }
    setIsLoading(false);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      Alert.alert(t('common.error', 'Error'), error.message);
    } else {
      Alert.alert(
        t('common.success', 'Success'),
        t(
          'loginScreen.signupSuccess',
          'Signup successful! Please check your email to confirm.',
        ),
      );
      // User will need to confirm email. Stay on login or show a message.
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('loginScreen.title')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('loginScreen.emailPlaceholder')}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={t('loginScreen.passwordPlaceholder')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title={t('loginScreen.loginButton', 'Login')}
            onPress={handleLogin}
          />
          <View style={styles.spacer} />
          <Button
            title={t('loginScreen.signupButton', 'Sign Up')}
            onPress={handleSignup}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    // fontFamily: 'Alef-Bold' // TODO: Add font
  },
  input: {
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // fontFamily: 'Alef-Regular' // TODO: Add font
  },
  buttonContainer: {
    marginTop: 10,
  },
  spacer: {
    height: 10,
  },
});

export default LoginScreen;
