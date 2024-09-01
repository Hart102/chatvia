import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import "./index.css";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import Room from "./pages/Room";
import Groups from "./pages/Groups";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  { path: routes.auth.root, element: <Signin /> },
  { path: routes.auth.signup, element: <Signup /> },
  { path: routes.chat.room, element: <Room /> },
  {
    path: "/chat",
    element: <Home />,
    children: [
      {
        path: routes.chat.root,
        element: <Chats />,
      },
      {
        path: routes.chat.profile,
        element: <Profile />,
      },
      {
        path: routes.chat.groups,
        element: <Groups />,
      },
      {
        path: routes.chat.settings,
        element: <Settings />,
      },
    ],
  },
]);

