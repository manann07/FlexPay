// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO01 from '../assets/LOGO01.png'


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
      navigate("/mylending");   
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Login failed. Check credentials.");
    }
  };

  return (

    // <div className="container mt-5" style={{ maxWidth: 520 }}>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <div className="mb-3">
    //       <label className="form-label">Email</label>
    //       <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Password</label>
    //       <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
    //     </div>
    //     {error && <div className="alert alert-danger">{error}</div>}
    //     <button className="btn btn-primary" type="submit">Login</button>
    //   </form>
    // </div>

  // ```
  // <html className="h-full bg-white">
  // <body className="h-full">
  // ```
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src={LOGO01} alt="flexpay" className="mx-auto h-8 w-10 w-auto" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>

  );
}

export default Login;
