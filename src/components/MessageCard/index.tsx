import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaEllipsisV, FaRegClock } from "react-icons/fa";
import { BiCopyAlt, BiTrash } from "react-icons/bi";
// import { messageObjectType } from "@/type/index";
import { current_user } from "@/api/currentUser";
import { imageUrl } from "@/utils/appwriteImageurl";



const MessageCard = ({
  _id,
  senderId,
  username,
  photoId,
  message,
  time,
}: {
  _id: string;
  senderId: string;
  username: string;
  photoId: string;
  message: string;
  time: string;
}) => {
  return (
    <div className={`flex ${senderId == current_user()?._id && "justify-end"}`}>
      <div
        className={`w-[80%] md:w-fit flex gap-1 mb-2 ${
          senderId == current_user()?._id && "flex-row-reverse"
        }`}
      >
        <div>
          <div className="flex flex-col gap-2 bg-deep-blue-100 text-white md:ml-10 p-2 md:p-3 rounded-tl-xl rounded-r-xl">
            <p>{message}</p>
            <span className="flex items-center justify-end gap-1 text-xs">
              <FaRegClock />
              {time}
            </span>
          </div>
          <div
            className={`flex ${
              senderId == current_user()?._id && "justify-end"
            }`}
          >
            <User
              avatarProps={{
                size: "sm",
                src: imageUrl(photoId),
              }}
              name={username}
              classNames={{
                base: `flex ${
                  senderId == current_user()?._id && "flex-row-reverse"
                }`,
              }}
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
              key={_id}
              endContent={<BiTrash />}
              className="text-gray-400 capitalize"
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default MessageCard;



// const MessageCard = ({
//   messageObject,
// }: {
//   messageObject: messageObjectType;
// }) => {
//   return (
//     <div className={`flex ${messageObject?.user == "sender" && "justify-end"}`}>
//       <div
//         className={`w-[80%] md:w-fit flex gap-1 mb-2 ${
//           messageObject?.user == "sender" && "flex-row-reverse"
//         }`}
//       >
//         <div>
//           <div className="flex flex-col gap-2 bg-deep-blue-100 text-white md:ml-10 p-2 md:p-3 rounded-tl-xl rounded-r-xl">
//             <p>{messageObject?.message}</p>
//             <span className="flex items-center justify-end gap-1 text-xs">
//               <FaRegClock />
//               {messageObject?.time}
//             </span>
//           </div>
//           <div
//             className={`flex ${
//               messageObject?.user == "sender" && "justify-end"
//             }`}
//           >
//             <User
//               avatarProps={{
//                 size: "sm",
//                 src: messageObject?.img,
//               }}
//               name={messageObject?.name}
//               classNames={{
//                 base: `flex ${
//                   messageObject?.user == "sender" && "flex-row-reverse"
//                 }`,
//               }}
//               className="text-sm font-medium text-gray-700 capitalize mt-2"
//             />
//           </div>
//         </div>
//         <Dropdown radius="sm" className="bg-white shadow-lg w-[150px]">
//           <div>
//             <DropdownTrigger>
//               <button className="flex capitalize border-0 outline-none">
//                 <FaEllipsisV size={11} className="mt-1 text-gray-400" />
//               </button>
//             </DropdownTrigger>
//           </div>
//           <DropdownMenu
//             variant="flat"
//             closeOnSelect={true}
//             disallowEmptySelection
//             selectionMode="single"
//           >
//             <DropdownItem
//               key={"1"}
//               endContent={<BiCopyAlt />}
//               className="text-gray-400 capitalize"
//             >
//               Copy
//             </DropdownItem>
//             <DropdownItem
//               key={messageObject?._id}
//               endContent={<BiTrash />}
//               className="text-gray-400 capitalize"
//             >
//               Delete
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default MessageCard;
