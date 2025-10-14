import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AccountPage() {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div style={{ maxWidth: 640, margin: "2rem auto" }}>
        <h1>Account</h1>
        <p>Please <Link to="/login">log in</Link> or <Link to="/register">register</Link> to view your profile.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "2rem auto" }}>
      <h1>My Profile</h1>
      <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      <h2 style={{ marginTop: 24 }}>My Reservations</h2>
      <p><em>Placeholder — will be implemented later.</em></p>
    </div>
  );
}