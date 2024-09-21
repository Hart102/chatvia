import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Card, CardBody } from "@nextui-org/react";
import { io } from "socket.io-client";
import Avater from "@/components/Avatar";
import { BiSearch } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instance, { apiURL } from "@/api/axios";
import { UserType } from "@/type/index";
import { imageUrl } from "@/utils/appwriteImageurl";
import { useDispatch } from "react-redux";
import { selectFriend } from "@/redux/Actions/SelectFriendAction";
import { current_user } from "@/api/currentUser";
import FriendsList from "@/components/FriendsList";
import { routes } from "@/routes";
import { MessageType, ActiveFriends } from "@/type/index";
import { getRelativeTime } from "@/utils/dateFormt";

const socket = io(apiURL);

const Chats = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [friends, setFriends] = useState<MessageType[]>([]);
  const [searchResult, setSearchResut] = useState<UserType[]>([]);
  const [activeFriends, setActiveFriends] = useState<ActiveFriends[]>([]);
  const from_user = current_user()?._id;

  useEffect(() => {
    socket.on("connect", async () => {});
    socket.emit("user_connected", from_user);
    socket.on("user_connected", (data) => {
      setActiveFriends(data?.activeFriends);
    });
    socket.emit("fetchFriends", { from_user });
    socket.on("fetchFriends", (data) => {
      if (!data?.isError) {
        setFriends(data?.payload);
      }
    });
  }, [from_user]);


  const ReturnFriendId = (ids: string[]) => {
    const userId = ids.filter((id) => id !== from_user);
    return userId[0];
  };

  const IndicatActiveFriends = () => {
    const active = [];
    if (activeFriends.length > 0 && friends.length > 0) {
      for (let i = 0; i < friends.length; i++) {
        const userId = ReturnFriendId([
          friends[i].to_user,
          friends[i].from_user,
        ]);

        if (userId == activeFriends[i]?._id) {
          active.push(userId);
        }
      }
    }
    return active;
  };

  const handleSelectFriend = (friend: MessageType) => {
    const id = ReturnFriendId([friend?.to_user, friend?.from_user]);

    dispatch(
      selectFriend({
        _id: id,
        username: friend.username,
        photo_id: friend?.photo_id,
      })
    );
  };

  const OpenChatRoom = (_id: string, username: string, photo_id: string) => {
    navigate(routes.chat.room);
    dispatch(
      selectFriend({
        _id,
        username,
        photo_id,
      })
    );
  };

  const findUser = async (query: string) => {
    if (query) {
      const { data } = await instance.get(`/find-user/${query.toLowerCase()}`);
      if (!data?.isError) {
        setSearchResut(data?.payload);
      }
    }
  };

  const settings = {
    dots: false,
    infinite: activeFriends.length > 4,
    speed: 500,
    slidesToShow:
      activeFriends.length > 1 ? Math.min(activeFriends.length, 4) : 1,
    slidesToScroll: Math.min(activeFriends.length, 1),
    autoplay: false,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-full py-8 flex flex-col gap-6">
      <p className="text-lg md:text-xl font-medium px-4 md:px-5">Chats</p>
      <div className="w-full flex flex-col gap-5 px-4 md:px-5">
        <form className="flex items-center gap-2 px-4 rounded bg-deep-gray-200 bg-opacity-75">
          <BiSearch size={22} className="text-gray-500" />
          <input
            type="search"
            placeholder="Search messages or users"
            onChange={(event) => findUser(event.target.value)}
            className="w-full outline-none bg-transparent py-3"
          />
        </form>
        {/* Active Friends List */}
        <Slider {...settings}>
          {activeFriends.map((friend) => (
            <div
              key={friend?._id}
              className={`${
                activeFriends.length === 1 && "single-slide"
              } flex-shrink-0 flex flex-col items-center mt-5 cursor-pointer`}
            >
              <div className="z-10 -my-4 flex justify-center">
                <Avater src={imageUrl(friend?.photo_id)} isOnline={true} />
              </div>
              <div className="min-h-[50px] w-full pt-5 bg-deep-gray-200 rounded bg-opacity-75">
                <p className="capitalize text-center text-xs font-medium line-clamp-1">
                  {friend?.username}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Friends List */}
      <div>
        <p className="mb-5 font-medium md:text-medium px-4 md:px-5">Recent</p>
        <div className="h-[55vh] md:h-[300px] flex flex-col gap-1 px-2 custom-scrollbar">
          {searchResult?.length < 1 ? (
            <>
              {friends?.map((friend, index) => (
                <>
                  {/* Desktop */}
                  <div
                    key={friend?._id}
                    className="hidden md:block"
                    onClick={() => handleSelectFriend(friend)}
                  >
                    <FriendsList
                      _id={friend?._id}
                      photo_id={friend?.photo_id}
                      username={friend?.username || ""}
                      message={friend?.message}
                      time={getRelativeTime(friend?.createdAt || "")}
                      isOnline={
                        IndicatActiveFriends()[index] ==
                        ReturnFriendId([friend?.from_user, friend?.to_user])
                      }
                    />
                  </div>
                  {/* Mobile */}
                  <div
                    className="block md:hidden"
                    onClick={() =>
                      OpenChatRoom(
                        friend?.to_user,
                        friend?.username || "",
                        friend?.photo_id
                      )
                    }
                  >
                    <FriendsList
                      _id={friend?._id}
                      photo_id={friend?.photo_id}
                      username={friend?.username || ""}
                      message={friend?.message}
                      time={getRelativeTime(friend?.createdAt || "")}
                      isOnline={
                        IndicatActiveFriends()[index] ==
                        ReturnFriendId([friend?.from_user, friend?.to_user])
                      }
                    />
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              {searchResult?.map((user) => (
                <Card shadow="none" className="bg-transparent cursor-pointer">
                  <CardBody className="flex flex-col gap-4">
                    <div
                      onClick={() => {
                        dispatch(
                          selectFriend({
                            _id: user?._id,
                            username: user?.username,
                            photo_id: user?.photo_id,
                          })
                        );
                      }}
                      className="flex items-center gap-2 capitalize font-medium"
                    >
                      <User
                        name={user?.username}
                        avatarProps={{
                          src: imageUrl(user?.photo_id),
                        }}
                      />
                    </div>
                  </CardBody>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chats;
