import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';

interface GuestRouteProps {
  children: ReactElement;
}

/**
 * Inverse of <ProtectedRoute />: guards a route that should only be reachable
 * while logged out. Visiting "/login" while already authenticated redirects
 * straight to "/table" instead of showing the form again.
 */
export const GuestRoute = ({ children }: GuestRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/table" replace />;
  }

  return children;
};

GuestRoute.displayName = 'GuestRoute';
