import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { Home, NotFound, SinglePlayer } from "@/pages";
import { AppLayout, GameMenuLayout } from "@/components/layout";

export const router = createBrowserRouter([
  // Pages WITHOUT header
  {
    element: <GameMenuLayout />,
    children: [{ path: ROUTES.HOME, element: <Home /> }],
  },

  // Pages WITH header
  {
    element: <AppLayout />,
    children: [{ path: ROUTES.SINGLEPLAYER, element: <SinglePlayer /> }],
  },

  // Not found page
  { path: "*", element: <NotFound /> },
]);
