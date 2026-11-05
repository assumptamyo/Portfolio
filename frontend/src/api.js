// Backend base URL. Empty in local dev (Vite proxies /api); set VITE_API_URL on Vercel.
export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
