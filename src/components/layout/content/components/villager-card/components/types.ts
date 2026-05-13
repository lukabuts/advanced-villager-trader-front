import type { Villager } from "@/types";

export interface VillagerCardBtnsProps {
  villager: Villager;
  worldId: string;
  type?: "kill" | "delete";
}

export interface VillagerModalWrapperProps {
  children: React.ReactNode;
  title: string;
  type: "edit" | "add" | "kill" | "delete";
  onConfirm: () => void;
}
