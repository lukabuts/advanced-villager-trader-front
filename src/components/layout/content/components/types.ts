import type { Villager, VillagerStatus, World } from "@/types";

export interface NavBtnProps {
  type: VillagerStatus;
  className?: string;
}

export interface NotFoundWrapperProps {
  children: React.ReactNode;
  icon: string;
}

export interface VillagerCardProps {
  world: World;
  villager: Villager;
  search: string;
}

export interface VillagerModalWrapperProps {
  children: React.ReactNode;
  title: string;
  type: "edit" | "add" | "kill" | "delete";
  onConfirm: () => void;
}
