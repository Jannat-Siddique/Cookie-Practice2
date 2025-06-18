import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Destructure setter

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { email, password });

      // Assume response returns a user object or token
      const userData = response.data.user || { email }; // fallback if only email

      // Save to global context
      setUser(userData);

      console.log("Login successful:", userData);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
