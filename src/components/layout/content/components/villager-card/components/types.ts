import type { Villager } from "@/types";

export interface VillagerCardBtnsProps {
  villager: Villager;
  worldId: string;
  type?: "kill" | "delete";
}
