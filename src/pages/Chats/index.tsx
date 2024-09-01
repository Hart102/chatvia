import Avater from "@/components/Avatar";
import { BiSearch } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatListItem from "@/components/ChatListItem";
import { unreadMessages } from "@/DummyData";

const friends = ["patrick", "emily", "doris", "steve", "teresa"];

const Chats = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: friends.length,
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
            className="w-full outline-none bg-transparent py-3"
          />
        </form>
        {/*========= Active Friends =========*/}
        <Slider {...settings}>
          {friends.map((friend) => (
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
          {unreadMessages?.map((message) => (
            <div
              key={message?._id}
              className="hover:bg-deep-gray-200 bg-opacity-75 px-4 md:px-1.5"
            >
              <ChatListItem
                src={message?.src}
                name="patrick Hendricks"
                message={message?.messages}
                time={message?.time}
                unreadMessages={message.unreadCount}
                _id={message?._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
