import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <aside className="bg-black text-white w-full md:w-64 p-5 h-full md:min-h-screen flex flex-col">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4 text-lg">
        <Link to="/dashboard" className="hover:text-red-500">🏠 Home</Link>
        <Link to="/dashboard/profile" className="hover:text-red-500">👤 Profile Setup</Link>
        <Link to="/dashboard/preview" className="hover:text-red-500">🌐 Website Preview</Link>
        <Link to="/dashboard/settings" className="hover:text-red-500">⚙️ Settings</Link>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded text-white"
      >
        🔒 Logout
      </button>
    </aside>
  );
};

export default Sidebar;
