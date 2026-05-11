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
