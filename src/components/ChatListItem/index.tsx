import { Card, CardBody } from "@nextui-org/react";
import Avater from "../Avatar";

const ChatListItem = ({
  src,
  name,
  message,
  time,
  unreadMessages,
}: {
  src: string;
  name: string;
  message: string;
  time: string;
  unreadMessages: number;
}) => {
  return (
    <Card shadow="none" radius="none" className="p-0 bg-transparent">
      <CardBody className="px-0">
        <div className="flex justify-between px-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <Avater src={src} />
            <div className=" flex flex-col gap-1">
              <p className="first-letter:capitalize font-medium">{name}</p>
              <span className="line-clamp-1 text-gray-500">{message}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2.5 text-xs">
            <span className="text-gray-500">{time}</span>
            {unreadMessages > 0 && (
              <div className="rounded-full text-center bg-red-100 text-red-400 py-0.5 px-2">
                01
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ChatListItem;
