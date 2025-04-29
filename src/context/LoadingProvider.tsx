// app/providers/LoadingProvider.tsx
"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  ReactNode,
} from "react";

// Define the shape of your context
interface LoadingContextType {
  isLoading: boolean;
}

// Create context with default value
const LoadingContext = createContext<LoadingContextType>({ isLoading: true });

interface LoadingProviderProps {
  children: ReactNode;
  duration?: number; // optional customization
}

export function LoadingProvider({
  children,
  duration = 1500,
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  const contextValue = useMemo(() => ({ isLoading }), [isLoading]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

// Custom hook to consume context
export function useLoading(): LoadingContextType {
  return useContext(LoadingContext);
}
