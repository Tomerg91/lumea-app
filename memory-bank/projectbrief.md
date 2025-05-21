# Project Brief: Lumea

## Mission

Set up an Expo React-Native + Supabase starter repo for "Lumea," a Hebrew-first coaching app that supports RTL out-of-the-box, automated CI/CD, an extensible "memory-bank" knowledge folder, and airtight security scaffolding.

## Core Requirements & Goals

*   **Platform:** Expo React-Native (SDK 50, RN 0.74)
*   **Backend:** Supabase
*   **Language/Localization:** Hebrew-first, RTL support, fallback to English (`en`)
*   **Workflow:** npm-only, Node 20 LTS
*   **Key Features (Initial Setup):**
    *   TypeScript, ESLint (Airbnb + hooks), Prettier, Husky
    *   Zustand for state management
    *   `react-i18next` for internationalization
    *   `react-native-simple-crypto` for encryption utilities
    *   Jest + RTL for testing with MMKV mock
    *   Supabase client initialized, feature flag system via Supabase table
    *   Three initial screens: SplashScreen, LoginScreen, OnboardingStep1RoleScreen
    *   CI/CD with GitHub Actions (lint, test, deploy Supabase migrations, S3 backups)
    *   Extensible "memory-bank/" knowledge folder
    *   Security scaffolding
*   **Deliverables:** A new monorepo `lumea-app` structured as per specifications. 