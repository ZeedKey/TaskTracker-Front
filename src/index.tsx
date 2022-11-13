import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import "./theme/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Home,Materials, MaterialsLoading } from "./pages";
import { defaultTheme } from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/materials",
    element: <Materials />,
  },
  {
    path: "/materials/:id",
    element: <MaterialsLoading />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
