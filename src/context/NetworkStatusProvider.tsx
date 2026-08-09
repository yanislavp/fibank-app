import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { NetworkStatusContext, type NetworkStatusContextValue } from './NetworkStatusContext';

export const NetworkStatusProvider = ({ children }: { children: ReactNode }) => {
  const browserOnline = useOnlineStatus();
  const [fetchReportedOffline, setFetchReportedOffline] = useState(false);

  const [prevBrowserOnline, setPrevBrowserOnline] = useState(browserOnline);
  if (browserOnline !== prevBrowserOnline) {
    setPrevBrowserOnline(browserOnline);
    if (browserOnline) {
      setFetchReportedOffline(false);
    }
  }

  const reportNetworkError = useCallback(() => setFetchReportedOffline(true), []);
  const clearNetworkError = useCallback(() => setFetchReportedOffline(false), []);

  const value = useMemo<NetworkStatusContextValue>(
    () => ({
      isOffline: !browserOnline || fetchReportedOffline,
      reportNetworkError,
      clearNetworkError,
    }),
    [browserOnline, fetchReportedOffline, reportNetworkError, clearNetworkError],
  );

  return (
    <NetworkStatusContext.Provider value={value}>
      {children}
    </NetworkStatusContext.Provider>
  );
};

NetworkStatusProvider.displayName = 'NetworkStatusProvider';
