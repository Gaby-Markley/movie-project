import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar-container">
      <Link to="/Movies">Movies</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/LogIn">Log In</Link>
    </div>
  );
}
