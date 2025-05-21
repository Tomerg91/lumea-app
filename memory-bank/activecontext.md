# Active Context: Lumea - Initial Setup

## Current Work Focus

*   Initializing the `lumea-app` monorepo with Expo React-Native (SDK 50), Supabase, and all specified configurations.
*   Correcting the `memory-bank/` directory location.
*   Preparing for Expo project initialization in the workspace root (`lumea-app`).

## Recent Changes

*   Attempted Expo initialization, encountered issues with nested directory structure.
*   Recreating Memory Bank files (`projectbrief.md`, `productcontext.md`, `activecontext.md`, etc.) in the correct `memory-bank/` path directly under the project root.

## Next Steps

1.  Recreate `systempatterns.md`, `techcontext.md`, `progress.md` in `memory-bank/`.
2.  Delete the erroneous nested `lumea-app/lumea-app` directory.
3.  Delete the placeholder `README.md` at the project root.
4.  Initialize the Expo project using `npx --yes create-expo-app@latest . --template blank@sdk-50 --no-install`.
5.  Install and configure all specified dependencies.
6.  Proceed with other setup tasks as outlined previously.

## Active Decisions & Considerations

*   **Correcting File Paths:** Ensuring all project files are created at their intended locations within the `lumea-app` root.
*   **Expo Init Command:** Using `.` to target the current directory for `create-expo-app`.

## Important Patterns & Preferences

*   (As previously defined)

## Learnings & Project Insights

*   Careful path specification is crucial when using file editing tools, especially in a new workspace.
*   `create-expo-app` is sensitive to pre-existing files in the target directory. 