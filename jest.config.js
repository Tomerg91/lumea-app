module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/react-native/extend-expect',
    './jest-setup.js',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Mock static assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|expo-.*|@expo/vector-icons|react-native-vector-icons|react-native-simple-crypto|@react-native-async-storage/async-storage|react-native-url-polyfill|react-native-gesture-handler|react-native-safe-area-context)/)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/index.ts',
    '!src/i18n/**', // Exclude i18n configuration
    '!src/lib/supabase.ts', // Exclude Supabase client setup for now unless testing specifically
    '!src/navigation/index.tsx', // Exclude simple navigator setup if not adding logic
    '!src/contexts/FeatureFlagContext.tsx', // Can be excluded if simple provider
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // coverageThreshold: { // Optional: uncomment and set thresholds if desired
  //   global: {
  //     statements: 80,
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //   },
  // },
};
