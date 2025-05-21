# Lumea App

Lumea is a Hebrew-first mobile coaching application designed for a seamless RTL user experience. This starter provides a robust foundation with Expo, React Native, Supabase, and best-practice development workflows.

**Tech Stack:** Node 20 LTS · Expo SDK 50 · npm

## Quick Start

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd lumea-app
    ```
2.  **Install dependencies:**
    ```bash
    npm i
    ```
3.  **Set up environment variables:**
    ```bash
    cp .env.example .env
    ```
    Then, fill in your Supabase and other credentials in the `.env` file.
4.  **Install Git hooks:**
    ```bash
    npx husky install
    ```
5.  **Run the app:**
    ```bash
    npx expo start
    ```

## Definition of Done (Initial Setup)

- [ ] Builds & runs on iOS + Android simulators
- [ ] RTL verified visually for Hebrew
- [ ] ESLint & Jest pass (`npm run lint`, `npm test`)
- [ ] Supabase env vars load from `.env`
- [ ] README quick-start works in ≤ 5 min
- [ ] memory-bank/*.md files present with placeholder headings
- [ ] Feature flags load from Supabase
- [ ] All UI strings are internationalized (he & en) 