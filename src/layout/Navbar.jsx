import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 8,
    fontWeight: 600,
    border: isActive ? "1px solid #999" : "1px solid transparent",
  });

  return (
    <nav style={{ display: "flex", gap: 12, padding: "12px 16px", borderBottom: "1px solid #eee" }}>
      <NavLink to="/books" style={linkStyle}>Books</NavLink>
      <NavLink to="/register" style={linkStyle}>Register</NavLink>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
    </nav>
  );
}