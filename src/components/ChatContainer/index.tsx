import { useState, useEffect, useRef } from "react";
import { BiMessageEdit, BiSend } from "react-icons/bi";
import MessageCard from "../MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { io } from "socket.io-client";
import { current_user } from "@/api/currentUser";
import { MessageType } from "@/type/index";
import { formatDate } from "@/utils/dateFormt";

const socket = io("http://localhost:5000");

const ChatContainer = () => {
  const hostId = current_user()?._id;
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

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
      hostId,
      friendId: selectedFriend?._id,
    });

    socket.on("fetchPreviousMessages", (data) => {
      if (!data?.isError) {
        setMessages(data?.payload);
      }
    });
  }, [messages, hostId, selectedFriend]);

  const sendMessage = () => {
    if (messageText !== "") {
      socket.emit("sendMessage", {
        senderId: current_user()?._id,
        friendId: selectedFriend?._id,
        text: messageText,
      });
      setMessageText("");
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="p-4 md:p-8">
      {messages?.map((message, index) => (
        <MessageCard
          key={index}
          _id=""
          message={message?.message || ""}
          photoId={
            message?.sender_id !== current_user()?._id
              ? selectedFriend?.photo_id || ""
              : ""
          }
          time={formatDate(message?.createdAt || "")}
          senderId={message?.sender_id}
          username={
            message?.sender_id == current_user()?._id
              ? current_user()?.username
              : selectedFriend?.username
          }
        />
      ))}

      <form
        className={`w-full fixed bottom-0 left-0 md:left-auto md:right-5 py-2 px-2
          bg-deep-gray-200 bg-opacity-90 flex items-center justify-center gap-4 border-t z-10 ${
            isProfileVisible ? "md:w-[35%]" : "md:w-[65%] md:px-4"
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
  );
};

export default ChatContainer;
