import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO01 from "../assets/LOGO01.png";
import Illustration from "../assets/handshake.png";
import Ground from "../assets/ground.png";
import "./login.css";

function Login() {
  const [password, setPassword] = useState(""); // add password state
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("borrower");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok) {
        // login successful — store user or token if needed
        console.log("User Data:", data.user);

        // ✅ Store user info in localStorage *****new
        localStorage.setItem(
          "userData",
          JSON.stringify({
            email: email,
            role: role,
            token: data.token || null, // if backend returns token
            name: data.user?.name || email.split("@")[0], // fallback to email prefix
          })
        );

        // ✅ Redirect based on role *****new
        if (role === "borrower") {
          navigate("/Loan-request");
        } else {
          navigate("/LoanSuggestions");
        }
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check your connection or backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-left__header">
          <img src={LOGO01} alt="Flex Pay" className="login-logo" />
        </div>
        <div className="login-left__content">
          <div className="login-circle" />
          <img
            src={Illustration}
            alt="Handshake illustration"
            className="login-illustration"
          />
          <img
            src={Ground}
            alt="ground illustration"
            className="login-ground-illustration"
          />
          <h1 className="login-headline">
            It All Starts
            <br />
            From <span>Here.</span>
          </h1>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <p className="login-card__intro text-center ">
            Sign in to your account
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-section">
              <p className="login-section__title">Register as -</p>
              <label className="login-radio">
                <input
                  type="radio"
                  name="role"
                  value="borrower"
                  checked={role === "borrower"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span>Borrower</span>
              </label>
              <label className="login-radio">
                <input
                  type="radio"
                  name="role"
                  value="lender"
                  checked={role === "lender"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span>Lender</span>
              </label>
            </div>

            <label className="login-input">
              <span>Email Address</span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
<<<<<<< HEAD
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
=======
>>>>>>> 54ea4af0d477408377952ba757e651a41a10643d
              />
            </label>
            {/* change added: password field   */}

            <div className="mt-0">
              <label className="login-input">
                <span>Password</span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
                />
              </label>
              <div className="text-sm">
                <Link
                  to="/forgot"
                  className="font-semibold text-green-700 hover:text-green-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
<<<<<<< HEAD
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
=======
            {/* change=== */}
>>>>>>> 54ea4af0d477408377952ba757e651a41a10643d

            {error && <div className="login-error">{error}</div>}

            {/* changes added : button  */}
            <button
              type="submit"
              disabled={loading}
              className={`login-submit 
              ${
                loading
                  ? "bg-indigo-400 cursor-wait"
                  : "bg-green-600 hover:bg-green-500"
              } `}
            >
              {loading ? "Signing in..." : "Sign in"}
              {/* Next */}
            </button>
          </form>

          <p className="login-card__footer">
            Not a Member? <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
