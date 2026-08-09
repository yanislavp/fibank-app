import type { ReactElement } from "react";
import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";

interface GuestRouteProps {
  children: ReactElement;
}

export const GuestRoute = ({ children }: GuestRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/table" replace />;
  }

  return children;
};

GuestRoute.displayName = "GuestRoute";
