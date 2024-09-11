import { Card, CardBody } from "@nextui-org/react";
import Avater from "../Avatar";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes";
import { useDispatch } from "react-redux";
import { selectFriend } from "@/redux/Actions/SelectFriendAction";

export const FriendsList = ({
  profileImg,
  username,
  message,
  timeStamp,
  unreadCount,
}: {
  profileImg: string;
  username: string;
  message: string;
  timeStamp: string;
  unreadCount: number;
}) => {
  return (
    <>
      <Card shadow="none" radius="none" className="p-0 bg-transparent">
        <CardBody className="px-0">
          <div className="grid grid-cols-4 md:px-2 cursor-pointer">
            <div className="flex items-center gap-2 col-span-3">
              <Avater src={profileImg} />
              <div className=" flex flex-col gap-1">
                <p className="capitalize font-medium">{username}</p>
                <span className="line-clamp-1 text-gray-500">{message}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2.5 text-xs pl-2 col-span-1">
              <span className="text-gray-500">{timeStamp}</span>
              {unreadCount > 0 && (
                <div className="rounded-full text-center bg-red-100 text-red-400 py-0.5 px-2">
                  01
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

const ChatListItem = ({
  _id,
  username,
  message,
  timeStamp,
  profileImg,
  unreadCount,
}: {
  _id: string;
  username: string;
  message: string;
  timeStamp: string;
  profileImg: string;
  unreadCount: number;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectFriend = () => {
    dispatch(
      selectFriend({
        _id,
        username,
        profile_photo_id: profileImg,
      })
    );
  };

  const openChatRoom = () => {
    navigate(routes.chat.room);
    handleSelectFriend();
  };

  return (
    <>
      {/*======= Desktop Screen =======*/}
      <div onClick={handleSelectFriend} className="hidden md:block">
        <FriendsList
          username={username}
          message={message}
          timeStamp={timeStamp}
          profileImg={profileImg}
          unreadCount={unreadCount}
        />
      </div>
      {/*======= Mobile Screen =======*/}
      <div className="block md:hidden" onClick={() => openChatRoom()}>
        <FriendsList
          username={username}
          message={message}
          timeStamp={timeStamp}
          profileImg={profileImg}
          unreadCount={unreadCount}
        />
      </div>
    </>
  );
};

export default ChatListItem;
