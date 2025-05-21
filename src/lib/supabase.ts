import 'react-native-url-polyfill/auto'; // Required for Supabase to work in React Native
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Ensure you have these in your .env file
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase URL or Anon Key is missing. Please check your .env file and environment variables setup.',
  );
  // You might want to throw an error here or handle it more gracefully
  // For now, we will proceed with a null client if variables are missing,
  // but this will cause runtime errors if Supabase is used.
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Example of how to define types for your database schema (optional but recommended)
// You would generate these types from your Supabase dashboard or using Supabase CLI
/*
export interface Database {
  public: {
    Tables: {
      feature_flags: {
        Row: { // The data expected from the server
          id: number;
          name: string;
          is_enabled: boolean;
          created_at: string;
        };
        Insert: { // The data to be passed to insert operations
          id?: number;
          name: string;
          is_enabled?: boolean;
          created_at?: string;
        };
        Update: { // The data to be passed to update operations
          id?: number;
          name?: string;
          is_enabled?: boolean;
          created_at?: string;
        };
      };
      // ... other tables
    };
    Views: { ... };
    Functions: { ... };
  };
}

export const typedSupabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
*/
