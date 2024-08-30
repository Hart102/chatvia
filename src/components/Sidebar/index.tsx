import { Image } from "@nextui-org/react";
import logo from "@/assets/chatvia-logo.png";
import { Link } from "react-router-dom";
import { navigations } from "../Navigations";
import { routes } from "@/routes";

const linkClasses =
  "px-2 py-4 flex justify-center items-center rounded bg-[#F1F0FD]1";

const SideBar = () => {
  return (
    <div
      className="fixed bottom-0 md:relative w-full md:w-[80px] md:min-h-screen bg-white 
    md:border-r py-2 px-3 md:p-5 flex flex-col items-center gap-4"
    >
      <Link to={routes.chat.root} className={`hidden md:flex ${linkClasses}`}>
        <Image src={logo} width={70} alt="" />
      </Link>

      <div className="flex md:flex-col gap-8">
        {navigations.map((item) => (
          <Link key={item.href} to={item.href} className={linkClasses}>
            <item.icon className="text-2xl text-gray-600 hover:text-gray-900" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
