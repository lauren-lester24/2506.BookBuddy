import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authApi } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("bb_token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!token);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function loadUser() {
      if (!token) return;
      setLoading(true);
      setError(null);
      try {
        const { data } = await authApi.me(token);
        if (!ignore) setUser(data);
      } catch (err) {
        if (!ignore) {
          localStorage.removeItem("bb_token");
          setToken(null);
          setUser(null);
          setError(err.message);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    loadUser();
    return () => { ignore = true; };
  }, [token]);

  function saveToken(newToken) {
    setToken(newToken);
    if (newToken) localStorage.setItem("bb_token", newToken);
    else localStorage.removeItem("bb_token");
  }
  function logout() {
    saveToken(null);
    setUser(null);
  }

  const value = useMemo(
    () => ({ token, user, loading, error, isLoggedIn: !!token, saveToken, setUser, logout }),
    [token, user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}