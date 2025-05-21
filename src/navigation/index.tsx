import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import SplashScreenComponent from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import OnboardingStep1RoleScreen from '../screens/Onboarding/Step1RoleScreen';

// Define your stack navigator param list
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  OnboardingStep1Role: undefined;
  // Add other screens here
  // Home: undefined; // Example
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreenComponent} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="OnboardingStep1Role"
      component={OnboardingStep1RoleScreen}
    />
    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
  </Stack.Navigator>
);

export default AppNavigator;
