// src/api/http.ts
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8081/app/rest", // aus deiner OpenAPI
});

// ---- Auth-Ready: aktuell NO-OP ----
export type TokenProvider = () => string | null;

let _getToken: TokenProvider = () => null;

/** Call once at app start if/when you add auth */
export function configureAuth(getToken: TokenProvider) {
  _getToken = getToken;
}

http.interceptors.request.use((config) => {
  const token = _getToken?.();
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});
