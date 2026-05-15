import { MinecraftText, MinecraftSearchInput } from "@/components/ui";
import type { World } from "@/types";
import { useWorldStore } from "@/store";
import { useState } from "react";
import { buildRoute, ROUTES } from "@/constants";
import { useNavigate } from "react-router-dom";
import { SelectWorldBtns, SelectWorldCard } from "./components";

const SelectWorld = () => {
  const navigate = useNavigate();

  const [selectedWorldId, setSelectedWorldId] = useState<World["id"] | null>(
    null,
  );
  const [filter, setFilter] = useState("");
  const { worlds } = useWorldStore();

  const selectedWorld = worlds.find((w) => w.id === selectedWorldId) ?? null;

  const filteredWorlds = worlds
    .filter((w) => w.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.createdAt - a.createdAt);

  const navigateToWorld = (worldId: World["id"] | null) => {
    if (!worldId) return;
    navigate(buildRoute(ROUTES.SINGLEPLAYER_WORLD, { worldId }));
  };
  const clearSelection = () => setSelectedWorldId(null);

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex flex-col items-center gap-4 pt-6">
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4">
          <MinecraftText style="white">
            <h1>Select World</h1>
          </MinecraftText>
          <MinecraftSearchInput
            className="w-full"
            placeholder="Search"
            initialValue={filter}
            onChange={(v) => setFilter(v.trim())}
          />
        </div>

        <div className="bg-black/40 backdrop-blur-md w-full flex justify-center double-b-shadow h-full sm:max-h-[calc(100vh-17.5rem)] max-h-[calc(100dvh-22rem)]">
          <div className="max-w-2xl w-full px-4 py-2 flex flex-col gap-1 overflow-y-auto mc-scrollbar">
            {worlds.length === 0 ? (
              <MinecraftText
                style="gray"
                className="text-center mt-4 text-base"
              >
                No worlds found. Create a new world to get started!
              </MinecraftText>
            ) : filteredWorlds.length === 0 ? (
              <MinecraftText
                style="gray"
                className="text-center mt-4 text-base"
              >
                No worlds found matching your search.
              </MinecraftText>
            ) : (
              filteredWorlds.map((w) => (
                <SelectWorldCard
                  key={w.id}
                  world={w}
                  isSelected={selectedWorldId === w.id}
                  onSelect={() =>
                    setSelectedWorldId((prev) => (prev === w.id ? null : w.id))
                  }
                  navigateToWorld={navigateToWorld}
                />
              ))
            )}
          </div>
        </div>

        <SelectWorldBtns
          selectedWorld={selectedWorld}
          navigateToWorld={navigateToWorld}
          clearSelection={clearSelection}
        />
      </div>
    </>
  );
};

export default SelectWorld;
