import { APP_SUBTITLE, ROUTES } from "@/constants";
import { useNavigate } from "react-router-dom";
import { MinecraftButton } from "@/components/ui";
import minecraft_logo from "@/assets/images/minecraft_transparent_logo.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={minecraft_logo} />
      </Helmet>
      <div className="flex flex-col absolute inset-0 items-center gap-10 mt-60">
        <div className="flex flex-col items-center select-none">
          <img
            src={minecraft_logo}
            alt="Minecraft Logo"
            className="w-full px-4 max-w-200 h-auto "
          />
          <span
            className="font-press-start-2p sm:text-4xl text-xl tracking-wider text-mc
             inline-block origin-center tilted-text subtitle-stroke font-extrabold"
          >
            {APP_SUBTITLE}
          </span>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <MinecraftButton
            label="Singleplayer"
            onClick={() => {
              navigate(ROUTES.SINGLEPLAYER);
            }}
          />
          <MinecraftButton
            label="Multiplayer"
            onClick={() => {
              navigate(ROUTES.MULTIPLAYER);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
