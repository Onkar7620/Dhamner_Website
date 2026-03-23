import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      localStorage.setItem("token", res.data.token);
     navigate("/admin/");
    } catch (err) {
  console.log(err.response?.data); // 🔥 ADD THIS
  console.log(err.message);
  alert("Login failed ❌");
}
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE (DESIGN) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white items-center justify-center p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back 👋
          </h1>
          <p className="text-lg opacity-90">
            Login to access the Admin Dashboard and manage all certificates, complaints, and services efficiently.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 p-6">

        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
          </div>

          {/* BUTTON */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition">
            Login
          </button>

        </form>
      </div>

    </div>
  );
}