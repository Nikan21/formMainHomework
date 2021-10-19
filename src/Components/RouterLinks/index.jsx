import { Link } from "react-router-dom";

export default function RouterPaige() {
  return (
    <nav>
      <Link to="/login">Login Page</Link>
      <Link to="/signUp">Sign Up Page</Link>;
    </nav>
  );
}
