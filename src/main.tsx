import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { router } from "./App.tsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);

// "npx tailwindcss -i ./src/index.css -o ./src/output.css --build";
