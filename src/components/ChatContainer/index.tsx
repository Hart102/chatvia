import { useState, useEffect } from "react";
import { BiMessageEdit, BiSend } from "react-icons/bi";
import MessageCard from "../MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { io } from "socket.io-client";
import { current_user } from "@/api/currentUser";

const socket = io("http://localhost:5000");

// import { messages } from "@/DummyData/index";

type MessageType = {
  senderId: string;
  receiverId: string;
  text: string;
};
const ChatContainer = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState<string>("");

  // USE THE ID FROM THE SELECETED FRIEND OBJECT FO FETCH CHATS LATER

  const { selectedFriend } = useSelector(
    (state: RootState) => state.selectedFriend
  );

  const userId = current_user()?._id;

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("userConnected", { userId });
    });

    socket.on("friends", (data) => {
      console.log("friends :", data);
    });
  }, [userId]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    console.log("All messages: ", messages);
  }, [messages]);

  const sendMessage = () => {
    if (messageText !== "") {
      socket.emit("sendMessage", {
        senderId: current_user()?._id,
        receiverId: selectedFriend?._id,
        reciever: selectedFriend?.username,
        text: messageText,
      });
      setMessageText("");
      console.log("sent message: ", messageText);
    }
  };

  const isProfileVisible = useSelector(
    (state: RootState) => state.isProfileVisible
  );

  return (
    <div className="p-4 md:p-8">
      {messages?.map((message, index) => (
        <MessageCard
          key={index}
          _id=""
          message={message?.text}
          profilePhotoId=""
          senderId={message?.senderId}
          time=""
          username={
            message?.senderId == current_user()?._id
              ? current_user()?.username
              : selectedFriend?.username
          }
        />
      ))}

      <form
        className={`w-full fixed bottom-0 left-0 md:left-auto md:right-2 py-4 px-2 flex items-center justify-center gap-4 border-t ${
          isProfileVisible ? "md:w-[35%]" : "md:w-[65%] md:px-4"
        }`}
      >
        <input
          type="text"
          placeholder="Enter mmessage..."
          onChange={(e) => setMessageText(e.target.value)}
          className="w-full bg-deep-gray-200 bg-opacity-60 p-3 outline-none"
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
