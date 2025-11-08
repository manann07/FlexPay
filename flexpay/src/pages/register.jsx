// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LOGO01 from "../assets/LOGO01.png";
import MAN_DESK from "../assets/man_on_desk/Group.png";
import MAN_DECOR from "../assets/man_on_desk/Group 113.png";
import MAN_ELLIPSE from "../assets/man_on_desk/Ellipse 20.png";
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [contact_no, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  // const [pan_no, setPanNo] = useState("");
  // const [aadhar_no, setAadharNo] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
     try {
      const res = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login"); // redirect after register
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setError("Backend not reachable or server error!");
    }
    // try {
      // Match your backend expected payload
      // const payload = {
        // name, email, contact_no, password,
        // pan_no, aadhar_no, role: "borrower" 
        // // or allow selection
      // };
      // For now, just simulate successful registration
      // console.log("Registration payload:", payload);
      // const res = await api.post("/register/", payload);
      // After successful registration you can redirect to login
      // alert("Registration successful! (This is a demo - no actual API call made)");
      // navigate("/login");
    // } catch (err) {
      // console.error(err);
      // setError(err.response?.data || "Registration failed");
    // }
  };

  return (
    <div className="flex min-h-screen flex-col px-6 py-6 md:py-10 bg-[#d9f1df]">
      <div className=" mt-10 mx-auto w-full max-w-6xl ">
        <div className="mb-8 flex items-center gap-2 ">
          <img src={LOGO01} alt="FlexPay" className="h-7 w-auto" />
          <span className="text-lg font-semibold tracking-wide text-gray-900">FlexPay</span>
        </div>
        <div className="items-center gap-10 md:flex">
          <div className="relative hidden md:block md:basis-2/5">
            <div className="relative rounded-2xl  p-6 sm:p-8 ">
              <img src={MAN_ELLIPSE} alt="decorative circle" className="pointer-events-none absolute -left-6 -top-3  select-none opacity-60" />
              <img src={MAN_DECOR} alt="decorative shape" className="pointer-events-none absolute -top-2 h-24 w-auto select-none opacity-80" />
              <img src={MAN_DESK} alt="Illustration" className="relative ml-0 h-auto w-full max-w-md" />
            </div>
          </div>

          <div className=" rounded-2xl sm:mx-auto sm:w-full sm:max-w-md md:basis-3/5">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">Full name</label>
                <input
                  className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-900">Contact number</label>
                <input
                  className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  value={contact_no}
                  onChange={e => setContactNo(e.target.value)}
                  placeholder="e.g. +91 98xxxxxx"
                />
              </div> */}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-900">PAN</label>
                <input
                  className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  value={pan_no}
                  onChange={e => setPanNo(e.target.value)}
                  placeholder="ABCDE1234F"
                />
              </div> */}
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-900">Aadhar</label>
              <input
                className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                value={aadhar_no}
                onChange={e => setAadharNo(e.target.value)}
                placeholder="12-digit Aadhar number"
              />
            </div> */}

            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                {typeof error === "string" ? error : JSON.stringify(error)}
              </div>
            )}

            <button type="submit" className=" bg-white text-dark flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs hover:bg-[#8DCFAB]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DCFAB]">
              Create account
            </button>

            {/* <p className="text-center text-sm text-gray-600">
              By creating an account, you agree to our
              <span className="px-1"></span>
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms</a>
              <span className="px-1">and</span>
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
            </p> */}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
