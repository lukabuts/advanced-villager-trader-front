export const LOCAL_STORAGE_KEYS = {
  THEME: "vth-theme",
  WORLDS: "villager-hall-worlds",
  FILTERS: (worldId: string) => `vth-filters-${worldId}`,
} as const;
