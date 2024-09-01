import {
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import logo from "@/assets/chatvia-logo.png";
import { Link } from "react-router-dom";
import { navigations } from "../Navigations";
import { routes } from "@/routes";
import { BiCog, BiIdCard, BiMoon, BiPowerOff } from "react-icons/bi";

const linkClasses =
  "px-2 py-4 flex justify-center items-center rounded bg-[#F1F0FD]1";

const SideBar = () => {
  return (
    <div
      className="fixed bottom-0 md:relative w-full md:w-[5%] 
    md:border-r py-2 px-3 md:p-5 flex flex-col items-center gap-4"
    >
      <Link to={routes.chat.root} className={`hidden md:flex ${linkClasses}`}>
        <Image src={logo} width={70} alt="" />
      </Link>
      <div className="flex md:flex-col gap-8">
        {navigations.map((item) => (
          <Link key={item.href} to={item.href} className={linkClasses}>
            <item.icon className="text-2xl text-gray-500" />
          </Link>
        ))}
        <BiMoon className="hidden md:block text-2xl text-gray-600 mx-auto cursor-pointer" />
        {/* ==================== */}
        <div className="flex items-center justify-center gap-4">
          <Dropdown
            shadow="lg"
            radius="sm"
            placement="bottom-start"
            classNames={{ base: "font-light text-gray-700" }}
          >
            <DropdownTrigger>
              <Avatar
                size="sm"
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" endContent={<BiIdCard size={16} />}>
                Profile
              </DropdownItem>
              <DropdownItem key="settings" endContent={<BiCog size={16} />}>
                Settings
              </DropdownItem>
              <DropdownItem
                key="logout"
                endContent={<BiPowerOff size={16} className="rotate-90" />}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
