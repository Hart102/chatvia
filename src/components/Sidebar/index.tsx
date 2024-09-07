import {
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import logo from "@/assets/chatvia-logo.png";
import { Link, useLocation } from "react-router-dom";
import { navigations } from "../Navigations";
import { routes } from "@/routes";
import { BiCog, BiIdCard, BiMoon, BiPowerOff } from "react-icons/bi";

const SideBar = () => {
  const location = useLocation();

  const linkClasses =
    "px-3 md:px-2 py-4 flex justify-center items-center rounded";

  return (
    <div
      className="fixed bottom-0 md:relative w-full md:w-[5%] bg-white 
    md:border-r py-2 px-1 flex flex-col items-center gap-4 z-10"
    >
      <Link to={routes.chat.root} className={`hidden md:flex py-4`}>
        <Image src={logo} width={30} />
      </Link>
      <div className="w-full flex justify-center md:flex-col gap-8">
        {navigations.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className={`${linkClasses} ${
              // location.pathname.slice(6) == page?.href?.slice(6) &&
              location.pathname.toLowerCase().includes(page?.href?.slice(6)) &&
              "bg-deep-gray-200"
            }`}
          >
            <page.icon className="text-2xl text-gray-500" />
          </Link>
        ))}
        <BiMoon className="hidden md:block text-2xl text-gray-600 mx-auto cursor-pointer" />
        {/* ==================== */}
        <div className="flex items-center justify-center gap-4 md:mt-2">
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
                <Link to={routes.chat.profile}>Profile</Link>
              </DropdownItem>
              <DropdownItem key="settings" endContent={<BiCog size={16} />}>
                <Link to={routes.chat.settings}>Settings</Link>
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
