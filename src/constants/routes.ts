export const ROUTES = {
  HOME: "/",
  SINGLEPLAYER: "/singleplayer",
  SINGLEPLAYER_WORLD: "/singleplayer/:worldId",
  MULTIPLAYER: "/multiplayer",
  MULTIPLAYER_WORLD: "/multiplayer/:worldId",
  INVITE: "/invite/:token",
} as const;

type Route = (typeof ROUTES)[keyof typeof ROUTES];
type Params = Record<string, string | number>;

export const buildRoute = (route: Route, params: Params = {}): string => {
  return Object.entries(params).reduce<string>(
    (path, [key, val]) => path.replace(`:${key}`, String(val)),
    route,
  );
};
