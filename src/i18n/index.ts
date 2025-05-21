import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import he from './he.json';
import en from './en.json';

const resources = {
  he: {
    translation: he,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Localization.getLocales()?.[0]?.languageTag || 'he', // device language or Hebrew fallback
    fallbackLng: 'en',
    compatibilityJSON: 'v3', // To make it work for Android devices
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false, // Set to true if you want to use Suspense
    },
  });

export default i18n;
