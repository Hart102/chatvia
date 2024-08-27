import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App.tsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

// "npx tailwindcss -i ./src/index.css -o ./src/output.css --build";
