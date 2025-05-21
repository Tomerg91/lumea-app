import React, { useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import * as Font from 'expo-font';
import * as SplashScreenExpo from 'expo-splash-screen';
import i18n from './i18n';
import { FeatureFlagsProvider } from './contexts/FeatureFlagContext';

// Import the new AppNavigator
import AppNavigator from './navigation'; // Assuming index.tsx is picked up

// RootStackParamList is now exported from navigation/index.tsx
// export type RootStackParamList = { ... }; // Removed

// const Stack = createNativeStackNavigator<RootStackParamList>(); // Removed

// Keep the splash screen visible while we fetch resources
SplashScreenExpo.preventAutoHideAsync();

// Enable and force RTL for Hebrew-first experience
if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
  console.warn(
    'RTL was not enabled. Forced RTL. Please reload the app if UI is not RTL.',
  );
}

const App = (): JSX.Element | null => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Alef-Regular': require('./assets/fonts/Alef.ttf'),
        });
      } catch (e) {
        console.warn('[App.tsx] Error loading app resources:', e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreenExpo.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
          <FeatureFlagsProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </FeatureFlagsProvider>
        </I18nextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
