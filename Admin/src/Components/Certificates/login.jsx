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
        "https://dhamner-website.onrender.com/api/admin/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      // ✅ IMPORTANT
      navigate("/admin", { replace: true });

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white items-center justify-center p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back 👋
          </h1>
          <p className="text-lg opacity-90">
            Login to access the Admin Dashboard.
          </p>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6"
            onChange={handleChange}
            required
          />

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}