// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Use your backend endpoint, e.g., /auth/login/ or /login/
      const res = await api.post("/login/", { email, password });
      // Example response: { token: "...", user: {...} }
      const token = res.data.token;
      // store token for later API calls
      localStorage.setItem("token", token);
      // redirect to dashboard or home
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Login failed. Check credentials.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 520 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
