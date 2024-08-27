import { createBrowserRouter } from "react-router-dom";

import Signin from "./pages/Signup";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/chat", element: <Home /> },
]);
