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
    <main className="max-w-350 my-0 mx-auto py-3 sm:px-6 px-3 grid grid-cols-[270px_1fr] gap-3 min-h-content-header">
      <Sidebar
        availableProfessions={availableProfessions}
        activeProfessions={professions}
        handleProfessionChange={setProfessions}
        searchValue={search}
        onSearchChange={setSearch}
      />
    </main>
  );
};

export default Singleplayer;
