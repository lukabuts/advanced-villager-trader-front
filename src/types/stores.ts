import type { ReactNode } from "react";
import type { NotificationType, Theme } from "./app";
import type { Trade, Villager } from "./villager";
import type { World } from "./world";

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface WorldStore {
  worlds: World[];

  // World actions
  createWorld: (name: string) => World;
  deleteWorld: (worldId: string) => void;
  renameWorld: (worldId: string, name: string) => void;
  getWorld: (worldId: string) => World | undefined;

  // Villager actions
  addVillager: (
    worldId: string,
    villager: Omit<Villager, "id" | "createdAt">,
  ) => void;
  updateVillager: (
    worldId: string,
    villagerId: string,
    updates: Partial<Omit<Villager, "id" | "createdAt">>,
  ) => void;
  deleteVillager: (worldId: string, villagerId: string) => void;
  killVillager: (worldId: string, villagerId: string) => void;
  reviveVillager: (worldId: string, villagerId: string) => void;

  // Trade actions
  addTrade: (
    worldId: string,
    villagerId: string,
    trade: Omit<Trade, "id">,
  ) => void;
  updateTrade: (
    worldId: string,
    villagerId: string,
    tradeId: string,
    updates: Partial<Omit<Trade, "id">>,
  ) => void;
  deleteTrade: (worldId: string, villagerId: string, tradeId: string) => void;
}
export interface ModalStore {
  isOpen: boolean;
  content: ReactNode | null;
  open: (content: ReactNode) => void;
  close: () => void;
}
export interface NotificationStore {
  message: string;
  type: NotificationType;
  visible: boolean;
  show: (message: string, type?: NotificationType) => void;
  hide: () => void;
}

export interface SidebarStore {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}
