import { useMemo, useState, type ReactNode } from 'react';
import { AuthContext, type AuthContextValue } from './AuthContext';

const AUTH_SESSION_KEY = 'fibank.auth.username';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(() =>
    sessionStorage.getItem(AUTH_SESSION_KEY),
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: username !== null,
      username,
      login: (name: string) => {
        sessionStorage.setItem(AUTH_SESSION_KEY, name);
        setUsername(name);
      },
      logout: () => {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
        setUsername(null);
      },
    }),
    [username],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.displayName = 'AuthProvider';
