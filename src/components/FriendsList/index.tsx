import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Avater from "@/components/Avatar";
import { imageUrl } from "@/utils/appwriteImageurl";

type MessageType = {
  _id?: string;
  photo_id: string;
  username: string;
  message: string;
  time: string;
  isOnline: boolean;
};

const FriendsList: React.FC<MessageType> = ({
  _id,
  photo_id,
  username,
  message,
  time,
  isOnline,
}) => {
  return (
    <Card shadow="none" radius="none" className="p-0 bg-transparent" id={_id}>
      <CardBody className="px-0">
        <div className="grid grid-cols-4 md:px-2 cursor-pointer">
          <div className="flex items-center gap-3 col-span-3">
            <Avater src={imageUrl(photo_id)} isOnline={isOnline} />
            <div className=" flex flex-col gap-1">
              <p className="capitalize font-medium">{username}</p>
              <span className="line-clamp-1 text-gray-500">{message}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2.5 text-xs pl-2 col-span-1">
            <span className="text-gray-500">{time}</span>
            <div>
              <span className="rounded-full bg-red-200 text-red-500 py-0.5 px-1.5">
                01
              </span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FriendsList;
