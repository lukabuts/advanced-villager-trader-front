import { Sidebar, Content } from "@/components/layout";
import { useWorldStore } from "@/store";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found";
import { Helmet } from "react-helmet-async";
import { APP_NAME } from "@/constants";

const Singleplayer = () => {
  const { worldId } = useParams();
  const world = useWorldStore((s) => s.worlds.find((w) => w.id === worldId));

  if (!world) return <NotFound className="col-span-full" type="world" />;

  return (
    <>
      <Helmet title={world.name + " - " + APP_NAME} />
      <Sidebar world={world} />
      <Content world={world} />
    </>
  );
};

export default Singleplayer;
