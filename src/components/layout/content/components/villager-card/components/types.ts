import type { Trade, Villager } from "@/types";

export interface VillagerCardBtnsProps {
  villager: Villager;
  worldId: string;
  type?: "kill" | "delete";
}

export interface TradeCardProps {
  trade: Trade;
  search: string;
}

export interface CuredBadgeProps {
  className?: string;
}
