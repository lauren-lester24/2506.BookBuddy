const BASE_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export async function api(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || data?.error || `Request failed: ${res.status}`);
  return data;
}

export const authApi = {
  register: ({ name, email, password }) =>
    api('/users/register', { method: 'POST', body: { name, email, password } }),
  login: ({ email, password }) =>
    api('/users/login', { method: 'POST', body: { email, password } }),
  me: (token) => api('/users/me', { token }),
};