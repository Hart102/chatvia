import SideBar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import ChatContainer from "@/components/ChatContainer";
import ModalLayout from "@/components/ModalLayout/index.";
import ProfilePreview from "@/components/ProfilePreview";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Header from "@/components/Header";
// import VioceCall from "@/components/VioceCall";
// import VideoCall from "@/components/VideoCall";

const Chat = () => {
  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  return (
    <>
      <div className="w-screen h-screen1 fixed top-0 flex flex-col-reverse md:flex-row lg:flex-row text-sm overflow-hidden">
        <SideBar />
        <div className="w-full md:w-[95%] h-full md:flex">
          <div className="w-full md:w-[30%] h-full md:px-2 bg-deep-gray-100 overflow-y-auto custom-scrollbar">
            <Outlet />
          </div>
          <div className="w-full md:w-[70%] flex flex-col md:flex-row">
            <div
              className={`w-full duration-300 delay-300 hidden md:block ${
                isProfileVisible ? "md:w-[62%]" : "md:w-[100%]"
              }`}
            >
              <Header />
              <ChatContainer />
              {/* <VideoCall /> */}
            </div>
            {isProfileVisible && (
              <div className="w-[47%] border-l-4 border-deep-gray-100">
                <ProfilePreview
                  user={{ _id: "", username: "", photo_id: "" }}
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
