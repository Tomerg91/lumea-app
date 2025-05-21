# Tech Context: Lumea

## Technologies Used

*   **Runtime Environment:** Node.js 20 LTS
*   **Package Manager:** npm
*   **Mobile Framework:** React Native 0.74 via Expo SDK 50
*   **Language:** TypeScript
*   **Backend as a Service (BaaS):** Supabase (JS Client)
    *   Authentication
    *   PostgreSQL Database
*   **State Management:** Zustand
*   **Internationalization (i18n):** `react-i18next`
*   **Cryptography:** `react-native-simple-crypto` (AES-GCM, PBKDF2)
*   **Testing:** Jest, `@testing-library/react-native`, MMKV mock
*   **Linting & Formatting:** ESLint (Airbnb config + React Hooks plugin), Prettier
*   **Git Hooks:** Husky (for pre-commit linting)
*   **CI/CD:** GitHub Actions
*   **Font:** Alef (placeholder initially)

## Development Setup

1.  Clone the `lumea-app` repository.
2.  Ensure Node 20 LTS and npm are installed.
3.  Run `npm i` to install dependencies.
4.  Run `npx husky install` to set up Git hooks.
5.  Copy `.env.example` to `.env` and populate with Supabase credentials and other necessary secrets.
6.  Run `npx expo start` to launch the development server.

## Technical Constraints

*   **npm-only workflow:** No Yarn or pnpm.
*   **Expo SDK 50 / RN 0.74:** Specific versions to adhere to.
*   **Node 20 LTS:** Required runtime version.
*   **Hebrew-first & RTL:** Must be supported out-of-the-box.

## Dependencies (Key npm packages)

*   `expo`
*   `react`
*   `react-native`
*   `typescript`
*   `eslint`, `eslint-config-airbnb`, `eslint-plugin-react-hooks`, `prettier`
*   `husky`
*   `zustand`
*   `i18next`, `react-i18next`
*   `react-native-simple-crypto`
*   `jest`, `@testing-library/react-native`, `react-native-mmkv-storage` (for mock)
*   `@supabase/supabase-js`
*   `react-navigation` (or `expo-router`)

## Tool Usage Patterns

*   **`npm ci`:** Used in CI for deterministic installs.
*   **`npm run lint`:** To run ESLint checks.
*   **`npm test`:** To run Jest tests.
*   **Supabase CLI:** For database migrations and backups.
*   **Expo CLI:** For running the app in development and building. 