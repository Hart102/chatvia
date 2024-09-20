import { useState, useEffect, useRef } from "react";
import { BiMessageEdit, BiSend } from "react-icons/bi";
import MessageCard from "../MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { io } from "socket.io-client";
import { current_user } from "@/api/currentUser";
import { MessageType } from "@/type/index";
import { getRelativeTime } from "@/utils/dateFormt";

const socket = io("http://localhost:5000");

const ChatContainer = () => {
  const from_user = current_user()?._id;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [userPhoto, setUserPhoto] = useState<string>("");

  // USE THE ID FROM THE SELECETED FRIEND OBJECT FO FETCH CHATS
  const { selectedFriend } = useSelector(
    (state: RootState) => state.selectedFriend
  );

  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.emit("fetchPreviousMessages", {
      from_user,
      to_user: selectedFriend?._id,
    });

    socket.on("fetchPreviousMessages", (data) => {
      if (!data?.isError) {
        setMessages(data?.payload);
        setUserPhoto(data?.user?.photo_id);
      }
    });
  }, [messages, from_user, selectedFriend]);

  const sendMessage = () => {
    if (messageText !== "") {
      socket.emit("sendMessage", {
        from_user: from_user,
        to_user: selectedFriend?._id,
        text: messageText,
      });

      setMessageText("");
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="w-full h-[93vh] md:h-[87vh]">
      <div className="w-full h-[92%] md:h-[88%] p-4 md:p-8 overflow-y-auto custom-scrollbar">
        {messages?.map((message, index) => (
          <MessageCard
            key={index}
            _id=""
            senderId={message?.from_user}
            message={message?.message || ""}
            time={getRelativeTime(message?.createdAt || "")}
            photoId={
              message?.from_user !== from_user
                ? selectedFriend?.photo_id || ""
                : userPhoto
            }
            username={
              message?.from_user == from_user
                ? current_user()?.username
                : selectedFriend?.username
            }
          />
        ))}
      </div>

      {/* Form for sending messages */}
      <div className="w-full relative bg-deep-gray-200 bg-opacity-90">
        <form
          className={`w-full fixed1 bottom-0 left-0 md:left-auto md:right-5 py-2 px-2
           flex items-center justify-center gap-4 border-t z-10 ${
             isProfileVisible ? "md:w-[35%]" : "md:w-[100%] md:px-4"
           }`}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter mmessage..."
            onChange={(e) => setMessageText(e.target.value)}
            className="w-full p-3 outline-none shadow"
          />
          <BiMessageEdit size={20} className="text-deep-blue-100" />
          <button
            type="button"
            onClick={() => sendMessage()}
            className="p-2 bg-deep-blue-100 text-white rounded"
          >
            <BiSend size={20} className="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
