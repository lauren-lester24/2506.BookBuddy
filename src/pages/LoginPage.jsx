<<<<<<< HEAD
export default function LoginPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Login</h1>
      <p>Placeholder — this will be implemented next.</p>
=======
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../api/client";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const nav = useNavigate();
  const { saveToken, setUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const { token } = await authApi.login(form);
      saveToken(token);
      const { data } = await authApi.me(token);
      setUser(data);
      nav("/account");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={onChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={onChange} required />
        </label>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button disabled={submitting}>{submitting ? "Logging in..." : "Log in"}</button>
      </form>
      <p style={{ marginTop: 8 }}>
        New here? <Link to="/register">Create an account</Link>
      </p>
>>>>>>> origin/feat/auth-login
    </div>
  );
}