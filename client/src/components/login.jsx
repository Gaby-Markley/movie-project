import { useState } from "react";
import { login } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const register = await login(username, password);
    setToken(register.data.token);
    console.log(register);
    setUsername("");
    setPassword("");
    nav("/profile");
  };
  // on line 18, is this supposed to be the route in the api we are taking or is this the url we are navigating to when we finish logging in the user?
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
