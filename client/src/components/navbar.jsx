import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Movies">Movies</Link>
      <Link to="/LogIn">Log In</Link>
    </div>
  );
}