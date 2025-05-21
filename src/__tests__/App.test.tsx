import React from 'react';
import { render, screen, act } from '@testing-library/react-native';
import App from '../App'; // Adjust path based on your App.tsx location relative to __tests__

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    GestureHandlerRootView: View,
    // Add any other exports from RNGH that your app might use at the top level
  };
});

// Mock expo-splash-screen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

// Mock expo-font
jest.mock('expo-font', () => ({
  loadAsync: jest.fn().mockResolvedValue(undefined),
}));

// Mock i18next and react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Simple pass-through mock for t function
    i18n: {
      changeLanguage: jest.fn(),
      dir: () => 'ltr', // Or 'rtl' if that's your default for tests
      // Add other i18n properties/methods if used directly in tested components
    },
  }),
  I18nextProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../i18n', () => ({
  // Adjust path to your i18n init file
  // Mock whatever your i18n instance exports if App.tsx or its children use it directly
  // This might not be necessary if I18nextProvider mock is sufficient
}));

// Mock FeatureFlagContext
jest.mock('../contexts/FeatureFlagContext', () => ({
  // Adjust path
  FeatureFlagsProvider: ({ children }: { children: React.ReactNode }) =>
    children,
  useFeatureFlags: () => ({
    flags: {},
    isLoading: false,
    error: null,
    getFlag: jest.fn(() => false),
    refreshFlags: jest.fn(),
  }),
}));

// Mock Supabase client for SplashScreen check
const mockGetSession = jest.fn();
const mockOnAuthStateChange = jest.fn(() => ({
  data: { subscription: { unsubscribe: jest.fn() } },
}));

jest.mock('@/lib/supabase', () => ({
  __esModule: true,
  supabase: {
    auth: {
      getSession: mockGetSession,
      onAuthStateChange: mockOnAuthStateChange,
    },
  },
}));

// Add mock for react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const insetChanged = jest.fn();
  const actual = jest.requireActual('react-native-safe-area-context');
  return {
    ...actual,
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }), // Example frame
  };
});

describe('<App />', () => {
  jest.useFakeTimers(); // Re-introduce fake timers

  beforeEach(() => {
    mockGetSession.mockReset();
    // Ensure expo-font loadAsync mock is reset if it were to be called multiple times across tests with different outcomes
    const expoFont = require('expo-font');
    expoFont.loadAsync.mockClear().mockResolvedValue(undefined);
    // Same for splash screen mocks
    const expoSplashScreen = require('expo-splash-screen');
    expoSplashScreen.preventAutoHideAsync.mockClear();
    expoSplashScreen.hideAsync.mockClear();
    mockOnAuthStateChange.mockClear();
  });

  it('navigates to LoginScreen when no session exists', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null }, error: null });

    render(<App />);

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve(); // Flush microtasks
    });

    // findByText will wait for the element to appear
    const loginTitle = await screen.findByText(
      'loginScreen.title',
      {},
      { timeout: 3000 },
    );
    expect(loginTitle).toBeTruthy();
  });

  it('navigates to OnboardingStep1RoleScreen when a session exists', async () => {
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: 'test-user' } } },
      error: null,
    });

    render(<App />);

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve(); // Flush microtasks
    });

    const onboardingTitle = await screen.findByText(
      'onboardingRoleScreen.title',
      {},
      { timeout: 3000 },
    );
    expect(onboardingTitle).toBeTruthy();
  });
});
