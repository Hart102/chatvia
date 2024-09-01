import {
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import {
  BiIdCard,
  BiPhone,
  BiSearch,
  BiTrash,
  BiUser,
  BiVideo,
} from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { openModal } from "@/redux/Actions/modalActions";
import { ViewProfile } from "@/redux/Actions/profileActions";
import CallModal from "../CallModal";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleAudioCall = (callType: string) => {
    dispatch(
      openModal(
        <CallModal
          recieversImage="https://i.pravatar.cc/150?u=a04258114e29026702d"
          recieversName="Jane Doe"
          callType={callType}
          onclick={() => console.log("clicked")}
        />,
        "md"
      )
    );
  };

  const handleViewProfile = () => dispatch(ViewProfile());

  return (
    <nav className="w-full sticky top-0 flex items-center justify-between p-4 md:p-6 border-b bg-white [&_svg]:text-gray-500 [&_svg]:cursor-pointer">
      <div className="flex items-center gap-3">
        <FaAngleLeft onClick={() => navigation(-1)} className="md:hidden" />
        <div className="flex items-center gap-2">
          <User
            name="Jane Doe"
            avatarProps={{
              size: "md",
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            classNames={{ name: "font-medium text-medium" }}
          />
          <div className="w-[9px] h-[9px] rounded-full flex items-center justify-center mt-1 bg-green-500">
            <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 text-gray-500 [&_svg]:cursor-pointer">
        <BiSearch size={20} />
        <BiPhone
          size={20}
          onClick={() => handleAudioCall("audio")}
          className="hidden md:block"
        />
        <BiVideo
          size={20}
          onClick={() => handleAudioCall("video")}
          className="hidden md:block"
        />
        <BiUser
          size={20}
          onClick={handleViewProfile}
          className="hidden md:block"
        />
        <Dropdown radius="none" className=" bg-white w-[150px]">
          <DropdownTrigger>
            <Button
              variant="bordered"
              size="sm"
              className="flex capitalize bg-transparent border-0 p-0 rounded text-sm"
            >
              <FaEllipsisH size={15} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="flat"
            closeOnSelect={true}
            disallowEmptySelection
            selectionMode="single"
          >
            <DropdownItem
              key="1"
              endContent={<BiIdCard />}
              className="capitalize"
            >
              View Profile
            </DropdownItem>
            <DropdownItem
              key="2"
              endContent={<BiPhone />}
              className="capitalize"
            >
              Audio
            </DropdownItem>
            <DropdownItem
              key="3"
              endContent={<BiVideo />}
              className="capitalize"
            >
              Video
            </DropdownItem>
            <DropdownItem
              key="4"
              endContent={<BiTrash />}
              className="capitalize"
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Header;
