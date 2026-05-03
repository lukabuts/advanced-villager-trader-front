import { Sidebar } from "@/components/layout";
import type { Profession } from "@/constants";
import { useWorldStore } from "@/store";
import { useWorldFilters } from "@/hooks";
import { useParams } from "react-router-dom";
import { NotFound } from "../not-found";

const Singleplayer = () => {
  const { worldId } = useParams();
  const world = useWorldStore((s) => s.worlds.find((w) => w.id === worldId));

  const { search, professions, setSearch, setProfessions } = useWorldFilters();

  const villagers = world?.tradingHall.villagers ?? [];

  const availableProfessions = [
    ...new Set(villagers.filter((v) => !v.dead).map((v) => v.profession)),
  ] as Profession[];

  if (!world) return <NotFound type="world" />;

  return (
    <>
      <Sidebar
        availableProfessions={availableProfessions}
        activeProfessions={professions}
        handleProfessionChange={setProfessions}
        searchValue={search}
        onSearchChange={setSearch}
      />
    </>
  );
};

export default Singleplayer;
