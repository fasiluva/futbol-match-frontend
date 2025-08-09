// utils/api.tsx (podés nombrarlo .ts; no hace falta .tsx si no usás JSX)

type Body = BodyInit | null | undefined;
type Token = string | null | undefined;

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

if (!API_URL) {
  // Podés cambiar esto por un warn si preferís
  console.warn("NEXT_PUBLIC_API_URL no está definido.");
}

const joinUrl = (path: string) => API_URL.replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");

const jsonHeaders: HeadersInit = {
  "Content-Type": "application/json",
  // Si querés insistir con CORS del lado cliente (no recomendado):
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  // "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const post_to_api = async (url: string, request?: Body) => {
  return fetch(joinUrl(url), {
    method: "POST",
    body: request,
    headers: jsonHeaders,
  });
};

export const get_from_api = async (url: string) => {
  return fetch(joinUrl(url), {
    method: "GET",
    headers: jsonHeaders,
  });
};

export const get_from_api_files = async (url: string) => {
  return fetch(joinUrl(url), {
    method: "GET",
  });
};

export const get_from_api_files_no_cache = async (url: string) => {
  return fetch(joinUrl(url), {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};

export const post_to_api_token = async (url: string, request?: Body, token?: Token) => {
  return fetch(joinUrl(url), {
    method: "POST",
    body: request,
    headers: {
      ...jsonHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};

export const post_to_api_token_files = async (url: string, request?: Body, token?: Token) => {
  // No seteamos Content-Type para permitir que el browser maneje boundary de FormData
  return fetch(joinUrl(url), {
    method: "POST",
    body: request,
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
};

export const get_from_api_token = async (url: string, token?: Token) => {
  return fetch(joinUrl(url), {
    method: "GET",
    headers: {
      ...jsonHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};

export default {
  post_to_api,
  get_from_api,
  post_to_api_token,
  get_from_api_token,
  post_to_api_token_files,
  get_from_api_files,
  get_from_api_files_no_cache,
};
