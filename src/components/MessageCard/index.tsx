import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaEllipsisV, FaRegClock } from "react-icons/fa";
import { BiCopyAlt, BiTrash } from "react-icons/bi";

type messageObjectType = {
  _id: string;
  userType: string;
  img: string;
  name: string;
  message: string;
  time: string;
};

const MessageCard = ({
  messageObject,
  classname,
  ellipsisPosition,
  imgPosition,
}: {
  messageObject: messageObjectType;
  classname: string;
  ellipsisPosition?: string;
  imgPosition?: string;
}) => {
  return (
    <div className={`w-[80%] md:w-fit flex gap-1 ${ellipsisPosition}`}>
      <div>
        <div className="flex flex-col gap-2 bg-[#7269EF] text-white md:ml-10 p-2 md:p-3 rounded-tl-xl rounded-r-xl">
          <p>{messageObject?.message}</p>
          <span className="flex items-center justify-end gap-1 text-xs">
            <FaRegClock />
            {messageObject?.time}
          </span>
        </div>
        <div className={`flex ${imgPosition}`}>
          <User
            avatarProps={{
              size: "sm",
              src: messageObject?.img,
            }}
            name={messageObject?.name}
            classNames={{ base: `flex ${classname}` }}
            className="text-sm font-medium text-gray-700 capitalize mt-2"
          />
        </div>
      </div>
      <Dropdown radius="sm" className="bg-white shadow-lg w-[150px]">
        <div>
          <DropdownTrigger>
            <button className="flex capitalize border-0 outline-none">
              <FaEllipsisV size={11} className="mt-1 text-gray-400" />
            </button>
          </DropdownTrigger>
        </div>
        <DropdownMenu
          variant="flat"
          closeOnSelect={true}
          disallowEmptySelection
          selectionMode="single"
        >
          <DropdownItem
            key={"1"}
            endContent={<BiCopyAlt />}
            className="text-gray-400 capitalize"
          >
            Copy
          </DropdownItem>
          <DropdownItem
            key={messageObject?._id}
            endContent={<BiTrash />}
            className="text-gray-400 capitalize"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MessageCard;
