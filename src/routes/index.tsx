import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { AppLayout, GameMenuLayout } from "@/components/layout";
import { Singleplayer, Home, NotFound, SelectWorld } from "@/pages";

export const router = createBrowserRouter([
  // Pages WITHOUT header
  {
    element: <GameMenuLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      {
        path: ROUTES.SINGLEPLAYER,
        element: <SelectWorld />,
      },
    ],
  },

  // Pages WITH header
  {
    element: <AppLayout />,
    children: [{ path: ROUTES.SINGLEPLAYER_WORLD, element: <Singleplayer /> }],
  },

  // Not found page
  { path: "*", element: <NotFound /> },
]);
