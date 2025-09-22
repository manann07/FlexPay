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
      // For now, just simulate successful login
      console.log("Login attempt:", { email, password });
      // const res = await api.post("/login/", { email, password });
      // Example response: { token: "...", user: {...} }
      // const token = res.data.token;
      // store token for later API calls
      // localStorage.setItem("token", token);
      // redirect to dashboard or home
      alert("Login successful! (This is a demo - no actual API call made)");
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
