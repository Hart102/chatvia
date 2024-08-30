import { BiChat, BiCog, BiUser } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { routes } from "@/routes";

export const navigations = [
  { href: routes.chat.profile, icon: BiUser },
  { href: routes.chat.root, icon: BiChat },
  { href: routes.chat.groups, icon: FaUsers },
  // { href: "/", icon: BiUser },
  { href: routes.chat.settings, icon: BiCog },
];
