import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // 👈 Import your Firebase config

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User logged in:", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center px-4 py-8">
      <div className="bg-gray-950 text-white rounded-2xl shadow-xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-red-600 rounded-l-2xl">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center">
            Enter your credentials to access your dashboard and manage your personal website.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-red-500">Login to Your Account</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-3 text-sm text-blue-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>

            <div className="text-center mt-3 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-400 hover:underline">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
