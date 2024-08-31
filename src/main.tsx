import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./App.tsx";
import "./index.css";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </Provider>
  </StrictMode>
);

// "npx tailwindcss -i ./src/index.css -o ./src/output.css --build";
