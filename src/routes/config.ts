import { lazy } from "react";

export const Singleplayer = lazy(
  () => import("@/pages/single-player/single-player"),
);
export const Home = lazy(() => import("@/pages/home/home"));
export const NotFound = lazy(() => import("@/pages/not-found/not-found"));
export const SelectWorld = lazy(
  () => import("@/pages/select-world/select-world"),
);
