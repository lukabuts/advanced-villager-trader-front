import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { Home, NotFound, SinglePlayer } from "@/pages";
import { AppLayout } from "@/components/layout";

export const router = createBrowserRouter([
  // Pages WITHOUT header
  { path: ROUTES.HOME, element: <Home /> },
  { path: "*", element: <NotFound /> },

  // Pages WITH header
  {
    element: <AppLayout />,
    children: [{ path: ROUTES.SINGLEPLAYER, element: <SinglePlayer /> }],
  },
]);
