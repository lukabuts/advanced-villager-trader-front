import type { Profession } from "@/constants";
import type { Trade } from "@/types";

export interface ModalLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export interface SelectProfessionProps {
  className?: string;
  profession: Profession | "";
  setProfession: (prof: Profession | "") => void;
  trades: Trade[];
  resetVillagerData: () => void;
}

export interface SelectTradesProps {
  className: string;
  trades: Trade[];
  setTrades: (trades: Trade[]) => void;
  profession: Profession | "";
}
