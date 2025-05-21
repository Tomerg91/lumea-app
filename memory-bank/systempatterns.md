# System Patterns: Lumea

## System Architecture

*   **Frontend:** Expo React-Native mobile application.
    *   UI Components: Custom React Native components with RTL support.
    *   Navigation: React Navigation or Expo Router (to be decided).
    *   State Management: Zustand.
    *   Internationalization: `react-i18next`.
*   **Backend:** Supabase.
    *   Authentication: Supabase Auth (Email/Password).
    *   Database: Supabase PostgreSQL.
    *   Storage: (Potentially Supabase Storage for user-generated content in the future).
    *   Realtime: (Potentially Supabase Realtime for chat or live updates).
*   **CI/CD:** GitHub Actions.
*   **Feature Flags:** Managed via a Supabase table, consumed by `FeatureFlagContext.tsx` in the app.

## Key Technical Decisions

*   **Expo Managed Workflow:** To simplify build and deployment processes initially.
*   **TypeScript:** For type safety and improved developer experience.
*   **Supabase as BaaS:** To accelerate backend development and leverage built-in features like Auth and DB.
*   **NPM as Package Manager:** Adherence to user specification.
*   **`react-native-simple-crypto`:** For client-side encryption needs.

## Design Patterns in Use

*   **Provider Pattern:** For contexts like Feature Flags, Supabase client, i18n.
*   **Modular Structure:** Organizing code by features/screens (e.g., `src/screens/Auth`, `src/screens/Onboarding`).
*   **Utility Functions:** For reusable logic like crypto operations (`src/lib/crypto.ts`).
*   **Environment Variables:** For Supabase configuration and other secrets.

## Component Relationships (High-Level)

*   `App.tsx` will wrap the main navigation stack with necessary providers.
*   Navigation stack will manage transitions between `SplashScreen`, `Auth` screens, and `Onboarding` screens.
*   Screens will consume contexts (Supabase, FeatureFlag, i18n) and Zustand stores as needed.
*   Reusable UI components (`src/components/`) will be used across screens.

## Critical Implementation Paths

1.  **Authentication Flow:** `SplashScreen` -> `LoginScreen` (if not authed) -> Main App (if authed).
2.  **Onboarding Flow:** `LoginScreen` -> `OnboardingStep1RoleScreen` -> (Further onboarding steps TBD).
3.  **Supabase Integration:** Ensuring the client is correctly initialized, and data (like feature flags) can be fetched.
4.  **RTL Implementation:** Ensuring all UI elements render correctly for Hebrew. 