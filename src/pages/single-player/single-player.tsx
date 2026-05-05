import { Sidebar, Content } from "@/components/layout";
import { useWorldStore } from "@/store";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found";

const Singleplayer = () => {
  const { worldId } = useParams();
  const world = useWorldStore((s) => s.worlds.find((w) => w.id === worldId));

  if (!world) return <NotFound type="world" />;

  return (
    <>
      <Sidebar world={world} />
      <Content />
    </>
  );
};

export default Singleplayer;
