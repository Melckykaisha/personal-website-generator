import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <DashboardLayout>
      <div className="animate-fadeIn space-y-6">
        <h1 className="text-3xl font-bold text-red-500">Welcome, {user?.displayName || "Guest"}!</h1>
        <p className="text-lg text-gray-300">
          Let's build your personal site. Use the side menu to get started.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📋 Profile Status</h3>
            <p>Complete your profile to generate your website.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📦 Website Builder</h3>
            <p>You can preview your site and export anytime.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
