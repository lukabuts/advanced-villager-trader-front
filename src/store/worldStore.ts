import { LOCAL_STORAGE_KEYS } from "@/constants";
import type { Villager, TradingHall, World, Trade, WorldStore } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const generateId = () =>
  `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;

const emptyHall = (): TradingHall => ({ villagers: [] });

export const useWorldStore = create<WorldStore>()(
  persist(
    (set, get) => ({
      worlds: [],

      // ===== WORLD ACTIONS =====

      createWorld: (name) => {
        const world: World = {
          id: generateId(),
          name,
          createdAt: Date.now(),
          tradingHall: emptyHall(),
        };
        set((state) => ({ worlds: [...state.worlds, world] }));
        return world;
      },

      deleteWorld: (worldId) => {
        set((state) => ({
          worlds: state.worlds.filter((w) => w.id !== worldId),
        }));
      },

      renameWorld: (worldId, name) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId ? { ...w, name } : w,
          ),
        }));
      },

      getWorld: (worldId) => {
        return get().worlds.find((w) => w.id === worldId);
      },

      // ===== VILLAGER ACTIONS =====

      addVillager: (worldId, villager) => {
        const newVillager: Villager = {
          ...villager,
          id: generateId(),
          createdAt: Date.now(),
          dead: false,
        };
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: [...w.tradingHall.villagers, newVillager],
                  },
                }
              : w,
          ),
        }));
      },

      updateVillager: (worldId, villagerId, updates) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId ? { ...v, ...updates } : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      deleteVillager: (worldId, villagerId) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.filter(
                      (v) => v.id !== villagerId,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      killVillager: (worldId, villagerId) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId
                        ? { ...v, dead: true, killedAt: Date.now() }
                        : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      reviveVillager: (worldId, villagerId) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId
                        ? { ...v, dead: false, killedAt: undefined }
                        : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      // ===== TRADE ACTIONS =====

      addTrade: (worldId, villagerId, trade) => {
        const newTrade: Trade = { ...trade, id: generateId() };
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId
                        ? { ...v, trades: [...v.trades, newTrade] }
                        : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      updateTrade: (worldId, villagerId, tradeId, updates) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId
                        ? {
                            ...v,
                            trades: v.trades.map((t) =>
                              t.id === tradeId ? { ...t, ...updates } : t,
                            ),
                          }
                        : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },

      deleteTrade: (worldId, villagerId, tradeId) => {
        set((state) => ({
          worlds: state.worlds.map((w) =>
            w.id === worldId
              ? {
                  ...w,
                  tradingHall: {
                    ...w.tradingHall,
                    villagers: w.tradingHall.villagers.map((v) =>
                      v.id === villagerId
                        ? {
                            ...v,
                            trades: v.trades.filter((t) => t.id !== tradeId),
                          }
                        : v,
                    ),
                  },
                }
              : w,
          ),
        }));
      },
    }),

    {
      name: LOCAL_STORAGE_KEYS.WORLDS,
    },
  ),
);
