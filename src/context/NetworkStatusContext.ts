import { createContext } from "react";

export interface NetworkStatusContextValue {
  reportNetworkError: () => void;
  clearNetworkError: () => void;
  isOffline: boolean;
}

export const NetworkStatusContext = createContext<
  NetworkStatusContextValue | undefined
>(undefined);
