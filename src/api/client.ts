import type { PeopleResponse } from "./types";

export class NetworkUnavailableError extends Error {
  constructor() {
    super("Network request failed. You may be offline.");
    this.name = "NetworkUnavailableError";
  }
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchPeoplePage = async (page: number): Promise<PeopleResponse> => {
  let response: Response;

  try {
    response = await fetch(`${BASE_URL}/people?page=${page}`);
  } catch {
    throw new NetworkUnavailableError();
  }

  if (!response.ok) {
    throw new ApiError(
      response.status,
      `The request failed with status ${response.status}`,
    );
  }

  return await response.json();
};
