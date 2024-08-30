import SideBar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Chat = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row">
      <SideBar />
      <div className="w-full md:w-[30%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Chat;
