import type { ReactElement } from "react";
import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.displayName = "ProtectedRoute";
