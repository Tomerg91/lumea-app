import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { supabase } from '../lib/supabase'; // Adjust path as necessary

interface FeatureFlag {
  name: string;
  is_enabled: boolean;
  description?: string;
}

interface FeatureFlagsContextType {
  flags: Record<string, boolean>;
  isLoading: boolean;
  error: Error | null;
  getFlag: (name: string) => boolean;
  refreshFlags: () => Promise<void>;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(
  undefined,
);

export const FeatureFlagsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchFlags = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: supabaseError } = await supabase
        .from('feature_flags')
        .select('name, is_enabled');

      if (supabaseError) throw supabaseError;

      if (data) {
        const newFlags = data.reduce(
          (acc, flag) => {
            acc[flag.name] = flag.is_enabled;
            return acc;
          },
          {} as Record<string, boolean>,
        );
        setFlags(newFlags);
      }
    } catch (e) {
      console.error('Failed to fetch feature flags:', e);
      setError(e as Error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFlags();

    // Optional: Set up a real-time listener for flag changes
    const channel = supabase
      .channel('public:feature_flags')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'feature_flags' },
        payload => {
          console.log('Feature flag change received!', payload);
          // Refetch all flags on any change for simplicity,
          // or update specific flag from payload if preferred.
          fetchFlags();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getFlag = (name: string): boolean => {
    return flags[name] || false; // Default to false if flag not found
  };

  return (
    <FeatureFlagsContext.Provider
      value={{ flags, isLoading, error, getFlag, refreshFlags: fetchFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export const useFeatureFlags = (): FeatureFlagsContextType => {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined) {
    throw new Error(
      'useFeatureFlags must be used within a FeatureFlagsProvider',
    );
  }
  return context;
};
