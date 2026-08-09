import type { PeopleResponse } from "@/api/types";

interface Cache {
  storedAt: number;
  ttlMs: number;
  data: PeopleResponse;
}

const CACHE_VERSION_PREFIX = "fibank.cache.v1.";

export const readCache = (key: string): PeopleResponse | null => {
  try {
    const raw = localStorage.getItem(CACHE_VERSION_PREFIX + key);
    if (!raw) return null;

    const envelope = JSON.parse(raw) as Cache;
    const isExpired = Date.now() - envelope.storedAt > envelope.ttlMs;
    if (isExpired) {
      localStorage.removeItem(CACHE_VERSION_PREFIX + key);
      return null;
    }
    return envelope.data;
  } catch (error) {
    console.warn(`localCache: failed to read "${key}", ignoring cache.`, error);
    return null;
  }
};

export const writeCache = (key: string, data: PeopleResponse, ttlMs: number): void => {
  const envelope: Cache = { storedAt: Date.now(), ttlMs, data };
  try {
    localStorage.setItem(CACHE_VERSION_PREFIX + key, JSON.stringify(envelope));
  } catch (error) {
    console.warn(
      `localCache: failed to write "${key}", data will not be cached.`,
      error,
    );
  }
};

export const clearCache = (key: string): void => {
  localStorage.removeItem(CACHE_VERSION_PREFIX + key);
};
