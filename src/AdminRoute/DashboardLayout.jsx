import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-[#F1F3F6]">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5 bg-[#F1F3F6] min-h-screen">
          <Outlet />
          {/* <Dashboard></Dashboard> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
