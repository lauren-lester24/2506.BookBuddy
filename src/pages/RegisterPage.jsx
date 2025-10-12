import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

async function registerRequest({ name, email, password }) {
  const res = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || data?.error || `Request failed: ${res.status}`);
  return data;
}

export default function RegisterPage() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      await registerRequest(form);
      nav("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "2rem auto" }}>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={onChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={onChange} required minLength={6} />
        </label>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        <button disabled={submitting}>{submitting ? "Creating..." : "Create account"}</button>
      </form>

      <p style={{ marginTop: 8 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}