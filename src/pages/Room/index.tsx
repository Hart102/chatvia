import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ChatContainer from "@/components/ChatContainer";
import Header from "@/components/Header";
import ModalLayout from "@/components/ModalLayout/index.";
import ProfilePreview from "@/components/ProfilePreview";

const Room = () => {
  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  return (
    <>
      <Header />
      <ChatContainer />
      {isProfileVisible && (
        <div className="absolute bg-white top-0 z-0">
          <ProfilePreview
            user={{ _id: "", photo_id: "" }}
            isPersonalProfile={false}
          />
        </div>
      )}
      <ModalLayout />
    </>
  );
};

export default Room;
