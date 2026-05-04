import type { Profession } from "@/constants";

export interface ProfessionFilterProps {
  availableProfessions: Profession[];
  activeProfessions: Profession[] | "all";
  handleProfessionChange: (profession: Profession | "all") => void;
}

export interface SearchTradesProps {
  onSearchChange: (search: string) => void;
  searchValue: string;
  className?: string;
}

export interface StatRowProps {
  label: string;
  value: string | number;
  valueClassName?: string;
}
