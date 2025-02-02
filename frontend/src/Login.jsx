import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./css/login.css"; // Import CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/users.json");
      const users = await response.json();

      const user = users.find((u) => u.username === username && u.password === password);

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Error fetching user data");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">Login</div>
      <div className="login-box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
