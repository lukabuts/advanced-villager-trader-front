import type { ContentProps } from "@/types";
import {
  AddVillagerBtn,
  FilterTags,
  NavBtn,
  NotFoundWrapper,
  VillagerCard,
} from "./components";
import { useWorldFilters } from "@/hooks";

export function Content({ world }: ContentProps) {
  const { search, professions, status } = useWorldFilters();

  let filteredVillagers = world.tradingHall.villagers;

  if (status !== "alive") {
    filteredVillagers = filteredVillagers.filter(
      (v) => v.dead === (status === "dead"),
    );
  } else {
    filteredVillagers = filteredVillagers.filter((v) => !v.dead);
  }

  if (professions !== "all") {
    filteredVillagers = filteredVillagers.filter((v) =>
      professions.includes(v.profession),
    );
  }

  if (search) {
    const lowerSearch = search.toLowerCase();
    filteredVillagers = filteredVillagers.filter((v) =>
      v.trades.some((t) => t.name.toLowerCase().includes(lowerSearch)),
    );
  }

  return (
    <div className="flex flex-col gap-container text-nowrap">
      {/* Navigation Buttons */}
      <div className="flex">
        <div className="flex gap-container font-sans text-sm text-content-dim border-b border-border flex-1">
          <NavBtn type="alive" className="text-emerald-dark border-border" />
          <NavBtn type="dead" className="text-red border-red" />
        </div>
        <AddVillagerBtn world={world} />
      </div>
      {/* Active Filters */}
      {search || professions !== "all" ? <FilterTags /> : null}
      {/* Villagers Grid */}
      <div className="villagers-grid pt-1 overflow-y-auto gap-3 min-scrollbar">
        {world.tradingHall.villagers.length === 0 ? (
          <NotFoundWrapper icon="🏘️">
            <p className="text-sm">No villagers yet. Add one to get started!</p>
          </NotFoundWrapper>
        ) : filteredVillagers.length === 0 ? (
          <NotFoundWrapper icon="🔍">
            <p className="text-sm">
              No {status === "dead" ? "dead" : "alive"} villagers{" "}
              {search || professions !== "all" ? "matching those filters" : ""}
            </p>
          </NotFoundWrapper>
        ) : (
          filteredVillagers
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((v) => (
              <VillagerCard
                key={v.id}
                world={world}
                villager={v}
                search={search}
              />
            ))
        )}
      </div>
    </div>
  );
}
