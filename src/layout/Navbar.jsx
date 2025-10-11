import { Link } from "react-router";

import { useAuth } from "../auth/AuthContext"

export default function Navbar() {
    const { loggedIn, logout } = useAuth();
return (
  <Header>
    <p>Book Buddy</p>
    <nav>
      <Link to="/books">Books</Link>

      {loggedIn ? (
        <>
          <Link to="/account">Account</Link>
          <a onClick={() => logout()}>Logout</a>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>

          <Link to="/login">Login</Link>
        </>
      )}
    </nav>

    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "Log out" : "Log in"}
    </button>
  </Header>
);

}