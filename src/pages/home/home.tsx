import { APP_SUBTITLE, ROUTES } from "@/constants";
import { useNavigate } from "react-router-dom";
import { MinecraftButton } from "@/components/ui";
import minecraft_logo from "@/assets/images/minecraft_transparent_logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col absolute inset-0 items-center gap-2">
        <div className="flex flex-col items-center sm:mt-60 mt-72 mb-10 select-none">
          <img
            src={minecraft_logo}
            alt="Minecraft Logo"
            className="w-full px-5 max-w-200 h-auto "
          />
          <span
            className="minecraft-subtitle font-mojangles md:text-4xl text-2xl tracking-wider text-minecraft drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]
             [text-shadow:2px_2px_rgba(0,0,0,0.67)]
             inline-block origin-center font-bold tilted-text "
          >
            {APP_SUBTITLE}
          </span>
        </div>
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
    </>
  );
};

export default Home;
