import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/NavBar/NavBar";
import Menubar from "../components/Menubar/Menubar";

const Main = () => {
  return (
    <div className="bg-[#F5F7F2]">
      <Navbar />
      {/* <Menubar /> */}
      <Outlet />
    </div>
  );
};

export default Main;
