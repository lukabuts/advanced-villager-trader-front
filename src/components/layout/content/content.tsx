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
        <AddVillagerBtn />
      </div>
      {/* Active Filters */}
      {search || professions !== "all" ? <FilterTags /> : null}
      {/* Villagers Grid */}
      <div className="villagers-grid pt-1">
        {world.tradingHall.villagers.length === 0 ? (
          <NotFoundWrapper icon="🏘️">
            <p className="text-sm">No villagers yet. Add one to get started!</p>
          </NotFoundWrapper>
        ) : filteredVillagers.length === 0 ? (
          <NotFoundWrapper icon="🔍">
            <p className="text-sm">
              No {status === "dead" ? "dead" : ""} villagers match the current
              filters.
            </p>
          </NotFoundWrapper>
        ) : (
          filteredVillagers.map((v) => (
            <VillagerCard key={v.id} villager={v} search={search} />
          ))
        )}
      </div>
    </div>
  );
}
