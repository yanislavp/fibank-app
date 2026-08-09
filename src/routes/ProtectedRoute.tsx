import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactElement;
}

/**
 * Guards a route behind authentication. Visiting "/table" directly without
 * having logged in redirects back to "/login" instead of rendering an
 * empty/broken table page.
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.displayName = 'ProtectedRoute';
