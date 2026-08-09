import { useCallback, useEffect, useState } from "react";
import {
  ApiError,
  NetworkUnavailableError,
  fetchPeoplePage,
} from "@/api/client";
import type { PeopleResponse } from "@/api/types";
import { readCache, writeCache } from "@/utils/localCache";
import { useNetworkStatus } from "./useNetworkStatus";

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes caching time

interface UsePeopleResult {
  data: PeopleResponse | null;
  isLoading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  isFromCache: boolean;
  refetch: () => void;
}

interface LoadedResult {
  page: number;
  data: PeopleResponse;
  isFromCache: boolean;
}

interface LoadError {
  page: number;
  message: string;
}

export const usePeople = (): UsePeopleResult => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<LoadedResult | null>(null);
  const [loadError, setLoadError] = useState<LoadError | null>(null);
  const [refetchToken, setRefetchToken] = useState(0);

  const { reportNetworkError, clearNetworkError } = useNetworkStatus();

  const data = result?.page === page ? result.data : null;
  const error = loadError?.page === page ? loadError.message : null;
  const isFromCache = result?.page === page ? result.isFromCache : false;
  const isLoading = data === null && error === null;

  useEffect(() => {
    let ignore = false;
    const cacheKey = `people.page.${page}`;

    (async () => {
      await Promise.resolve();

      if (ignore) return;

      const cached = readCache(cacheKey);
      if (cached) {
        setResult({ page, data: cached, isFromCache: true });
        setLoadError((prev) => (prev?.page === page ? null : prev));
        return;
      }

      try {
        const response = await fetchPeoplePage(page);
        writeCache(cacheKey, response, CACHE_TTL_MS);
        if (ignore) return;
        setResult({ page, data: response, isFromCache: false });
        setLoadError((prev) => (prev?.page === page ? null : prev));
        clearNetworkError();
      } catch (err) {
        if (ignore) return;
        if (err instanceof NetworkUnavailableError) {
          reportNetworkError();
          setLoadError({
            page,
            message:
              "You appear to be offline. Check your connection and try again.",
          });
        } else if (err instanceof ApiError) {
          setLoadError({
            page,
            message: `Failed to load data (status ${err.status}). Please try again.`,
          });
        } else {
          setLoadError({
            page,
            message: "Something went wrong while loading data.",
          });
        }
      }
    })();

    return () => {
      ignore = true;
    };
  }, [page, refetchToken, reportNetworkError, clearNetworkError]);

  const refetch = useCallback(() => setRefetchToken((token) => token + 1), []);

  return { data, isLoading, error, page, setPage, isFromCache, refetch };
};
