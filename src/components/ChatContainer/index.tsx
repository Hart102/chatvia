import { BiMessageEdit, BiSend } from "react-icons/bi";
import MessageCard from "../MessageCard";
import { Button } from "@nextui-org/react";

const message = {
  _id: "123",
  userType: "reciever",
  img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  name: "doris",
  message: "Yeah everything is fine",
  time: "10:05",
};

const message2 = {
  _id: "123",
  userType: "sender",
  img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  name: "doris",
  message: "Good morning, How are you? What about our next meeting?",
  time: "10:05",
};

const ChatContainer = () => {
  return (
    <div className="p-4 md:p-8 relative">
      <div className="mx-auto container flex flex-col gap-2">
        <div>
          <MessageCard messageObject={message} classname="flex-row" />
        </div>
        <div className="flex justify-end">
          <MessageCard
            messageObject={message2}
            classname="flex-row"
            ellipsisPosition="flex-row-reverse"
            imgPosition="justify-end"
          />
        </div>

        <form className="w-full sticky bottom-5 flex items-center gap-3 [&_svg]:cursor-pointer">
          <input
            type="text"
            placeholder="Enter mmessage..."
            className="w-full bg-deep-gray-100 p-3 outline-none"
          />
          <BiMessageEdit size={20} className="text-[#7269EF]" />
          <button type="button" className="p-2 bg-[#7269EF] text-white rounded">
            <BiSend size={20} className="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
