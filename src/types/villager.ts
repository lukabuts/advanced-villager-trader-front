import type { Profession } from "@/constants";

export type TradeType = "buy" | "sell";
export interface Trade {
  id: string;
  name: string;
  cost: number;
  quantity: number;
  type: TradeType;
}

export interface Villager {
  id: string;
  name: string;
  profession: Profession;
  notes: string;
  dead: boolean;
  killedAt?: number;
  trades: Trade[];
  createdAt: number;
}

export type VillagerStatus = "alive" | "dead";
