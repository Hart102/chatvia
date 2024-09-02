import { BiMessageEdit, BiSend } from "react-icons/bi";
import MessageCard from "../MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { messages } from "@/DummyData/index";

const ChatContainer = () => {
  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  // USE THE ID FROM THE SELECETED FRIEND OBJECT FO FETCH CHATS LATER

  // const { selectedFriend } = useSelector(
  //   (state: RootState) => state.selectedFriend
  // );

  return (
    <div className="p-4 md:p-8">
      {messages?.map((message) => (
        <MessageCard key={message._id} messageObject={message} />
      ))}

      <form
        className={`w-full fixed bottom-0 left-0 md:left-auto md:right-2 py-4 px-2 flex items-center justify-center gap-4 border-t ${
          isProfileVisible ? "md:w-[35%]" : "md:w-[65%] md:px-4"
        }`}
      >
        <input
          type="text"
          placeholder="Enter mmessage..."
          className="w-full bg-deep-gray-200 bg-opacity-60 p-3 outline-none"
        />
        <BiMessageEdit size={20} className="text-deep-blue-100" />
        <button
          type="button"
          className="p-2 bg-deep-blue-100 text-white rounded"
        >
          <BiSend size={20} className="" />
        </button>
      </form>
    </div>
  );
};

export default ChatContainer;
