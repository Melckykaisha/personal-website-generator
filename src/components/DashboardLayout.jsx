import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-900 text-white p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
