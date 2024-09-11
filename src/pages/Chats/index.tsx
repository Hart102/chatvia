import { useState } from "react";
import { User, Card, CardBody } from "@nextui-org/react";
import Avater from "@/components/Avatar";
import { BiSearch } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatListItem from "@/components/ChatListItem";
import { Friends } from "@/DummyData/database";
import instance from "@/api/axios";
import { UserType } from "@/type/index";
import { imageUrl } from "@/utils/appwriteImageurl";
import { useDispatch } from "react-redux";
import { selectFriend } from "@/redux/Actions/SelectFriendAction";

const activeFriends = ["patrick", "emily", "doris", "steve", "teresa"];

const Chats = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResut] = useState<UserType[]>([]);

  const findUser = async (query: string) => {
    if (query) {
      const { data } = await instance.get(`/find-user/${query.toLowerCase()}`);

      if (!data?.isError) {
        setSearchResut(data?.payload);
      }
    }
  };

  const handleSelectFriend = (user: UserType) => {
    console.log(user);
    dispatch(
      selectFriend({
        _id: user._id,
        username: user.username,
        profile_photo_id: user?.profile_photo_id,
      })
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: activeFriends.length,
    autoplay: false,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-full py-8 flex flex-col gap-6 bg-deep-gray-100 bg-opacity-85">
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
        {/*========= Active Friends =========*/}
        <Slider {...settings}>
          {activeFriends.map((friend) => (
            <div
              key={friend}
              className="flex flex-col items-center mt-5 cursor-pointer"
            >
              <div className="z-10 -my-4 flex justify-center">
                <Avater src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </div>
              <div className="min-h-[50px] w-full pt-5 bg-deep-gray-200 rounded bg-opacity-75">
                <p className="capitalize text-center text-xs font-medium line-clamp-1">
                  {friend}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/*============ Chat List ============*/}
      <div>
        <p className="mb-5 font-medium md:text-medium px-4 md:px-5">Recent</p>
        <div className="h-[55vh] md:h-[300px] flex flex-col gap-1 px-2 custom-scrollbar">
          {searchResult.length < 1 ? (
            Friends.map((message) => (
              <div
                key={message?._id}
                className="hover:bg-deep-gray-200 bg-opacity-75 px-4 md:px-1.5"
              >
                <ChatListItem
                  _id={message?._id}
                  profileImg={message?.img}
                  message={message?.message}
                  timeStamp={message?.timeStamp}
                  unreadCount={message?.unreadCount}
                  username={message?.username}
                />
              </div>
            ))
          ) : (
            <>
              {searchResult?.map((user) => (
                <Card shadow="none" className="bg-transparent cursor-pointer">
                  <CardBody className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 capitalize font-medium">
                      <User
                        name={user?.username}
                        avatarProps={{
                          src: imageUrl(user?.profile_photo_id),
                        }}
                        onClick={() => handleSelectFriend(user)}
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
