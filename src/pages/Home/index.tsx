import SideBar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import ChatContainer from "@/components/ChatContainer";
import ModalLayout from "@/components/ModalLayout/index.";
import ProfilePreview from "@/components/ProfilePreview";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Header from "@/components/Header";

const Chat = () => {
  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  return (
    <>
      <div className="w-full1 h-screen flex flex-col-reverse md:flex-row lg:flex-row text-sm overflow-x-hidden">
        <SideBar />
        <div className="w-full md:w-[95%] flex">
          <div className="w-full md:w-[30%]">
            <Outlet />
          </div>
          <div className="w-full md:w-[70%] flex">
            <div
              className={`w-full duration-300 delay-300 ${
                isProfileVisible ? "md:w-[62%]" : "md:w-[100%]"
              }`}
            >
              <Header />
              <ChatContainer />
            </div>
            {isProfileVisible && (
              <div className="w-[47%] border-l-4 border-deep-gray-100">
                <ProfilePreview
                  isPersonalProfile={false}
                  backgroundColor="bg-transparent"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalLayout />
    </>
  );
};

export default Chat;
