export interface Trade {
  id: string;
  name: string;
  cost: number;
  locked: boolean;
}

export interface Villager {
  id: string;
  name: string;
  profession: string;
  notes: string;
  dead: boolean;
  killedAt?: number;
  trades: Trade[];
  createdAt: number;
}
