import type { Villager, VillagerStatus } from "@/types";

export interface NavBtnProps {
  type: VillagerStatus;
  className?: string;
}

export interface NotFoundWrapperProps {
  children: React.ReactNode;
  icon: string;
}

export interface VillagerCardProps {
  villager: Villager;
  search: string;
}
