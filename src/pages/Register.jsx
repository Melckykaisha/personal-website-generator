import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase"; // 👈 your Firebase config

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      console.log("User registered:", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center px-4 py-8">
      <div className="bg-gray-950 text-white rounded-2xl shadow-xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-red-600 rounded-l-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
          <p className="text-center">
            Fill in your details to create your personal website dashboard.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-red-500">Create an Account</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

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
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
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
              Register
            </button>

            <div className="text-center mt-3 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
