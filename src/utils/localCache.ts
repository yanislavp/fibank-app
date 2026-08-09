import type { PeopleResponse } from "@/api/types";

const getKey = (key: string) => `fibank.cache.v1.${key}`;

export const clearCache = (key: string) => {
  localStorage.removeItem(getKey(key));
};

export const readCache = (key: string): PeopleResponse | null => {
  try {
    const raw = localStorage.getItem(getKey(key));
    if (!raw) return null;

    const { storedAt, ttlMs, data } = JSON.parse(raw);

    if (Date.now() - storedAt > ttlMs) {
      clearCache(key);
      return null;
    }

    return data;
  } catch {
    return null;
  }
};

export const writeCache = (
  key: string,
  data: PeopleResponse,
  ttlMs: number,
) => {
  try {
    localStorage.setItem(
      getKey(key),
      JSON.stringify({ storedAt: Date.now(), ttlMs, data }),
    );
  } catch {
    return null;
  }
};
