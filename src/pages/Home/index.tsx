import SideBar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import ChatContainer from "@/components/ChatContainer";

const Chat = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row">
      <SideBar />
      <div className="inline-block">
        <div className="w-full md:w-[30%]">
          <Outlet />
        </div>
        <div className="w-full md:w-[70%]">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Chat;
