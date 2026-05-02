import type { Villager } from "./villager";

export interface TradingHall {
  villagers: Villager[];
}

export interface World {
  id: string;
  name: string;
  createdAt: number;
  tradingHall: TradingHall;
}
