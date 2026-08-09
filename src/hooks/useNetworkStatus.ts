import { NetworkStatusContext } from "@/context/NetworkStatusContext";
import { useContext } from "react";

export const useNetworkStatus = () => {
  const context = useContext(NetworkStatusContext);
  if (!context) {
    throw new Error(
      "useNetworkStatus must be used within a NetworkStatusProvider",
    );
  }
  return context;
};
