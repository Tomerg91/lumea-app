import { jest } from '@jest/globals';

jest.mock('react-native-mmkv', () => {
  const store = new Map();
  return {
    MMKV: jest.fn().mockImplementation(() => ({
      set: jest.fn((key, value) => store.set(key, value)),
      getString: jest.fn(key => store.get(key) || null),
      getNumber: jest.fn(key => store.get(key) || null),
      getBoolean: jest.fn(key => store.get(key) || null),
      delete: jest.fn(key => store.delete(key)),
      clearAll: jest.fn(() => store.clear()),
      getAllKeys: jest.fn(() => Array.from(store.keys())),
      // Add other methods if your app uses them
    })),
  };
});
