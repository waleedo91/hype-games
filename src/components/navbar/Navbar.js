import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Navbar.css";

export default function Navbar() {
  const { logout, loading } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="site-name">
          <Link to="/">Hype Games</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            {!loading && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {loading && (
              <button className="btn" disabled>
                Logging Out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
