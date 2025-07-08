import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-500">WebGen</h1>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/register" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
