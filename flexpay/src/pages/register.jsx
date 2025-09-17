// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [pan_no, setPanNo] = useState("");
  const [aadhar_no, setAadharNo] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Match your backend expected payload
      const payload = {
        name, email, contact_no, password,
        pan_no, aadhar_no, role: "borrower" // or allow selection
      };
      const res = await api.post("/register/", payload);
      // After successful registration you can redirect to login
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 720 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Name</label>
            <input className="form-control" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="mb-3 col-md-6">
            <label className="form-label">Contact No</label>
            <input className="form-control" value={contact_no} onChange={e => setContactNo(e.target.value)} />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3 col-md-3">
            <label className="form-label">PAN</label>
            <input className="form-control" value={pan_no} onChange={e => setPanNo(e.target.value)} />
          </div>
          <div className="mb-3 col-md-3">
            <label className="form-label">Aadhar</label>
            <input className="form-control" value={aadhar_no} onChange={e => setAadharNo(e.target.value)} />
          </div>
        </div>

        {error && <div className="alert alert-danger">{JSON.stringify(error)}</div>}
        <button className="btn btn-success" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
