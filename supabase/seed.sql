-- supabase/seed.sql

-- Initial seed data for the feature_flags table
-- This will only run if the table is empty (e.g., on project setup or after a reset)
-- Supabase typically runs this after migrations.

-- Make sure to only insert if the flag doesn't already exist to avoid errors on re-runs if needed.
-- (Though for a clean seed, this might not be strictly necessary if the DB is reset)

INSERT INTO public.feature_flags (name, is_enabled, description)
VALUES
  ('onboardingV2', FALSE, 'Enable the version 2 of the onboarding flow.'),
  ('darkMode', TRUE, 'Enable dark mode theme for the entire application.'),
  ('coachingChat', FALSE, 'Enable real-time chat feature between coach and client.')
ON CONFLICT (name) DO NOTHING;

-- You can add more seed data for other tables here if necessary
-- For example:
-- INSERT INTO public.another_table (column1, column2) VALUES ('value1', 'value2'); 