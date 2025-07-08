import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-black via-red-900 to-blue-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Create Your <span className="text-red-500">Personal Website</span> Instantly
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Build and share your portfolio, projects, and personal profile – in minutes.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-red-600 px-6 py-3 rounded text-white font-semibold hover:bg-red-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded font-semibold hover:bg-blue-500 hover:text-white"
          >
            I Already Have an Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
