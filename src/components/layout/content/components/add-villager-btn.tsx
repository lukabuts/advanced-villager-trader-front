import { PlusIcon } from "lucide-react";
import type { AddVillagerBtnProps } from "./types";

export function AddVillagerBtn({ onClick }: AddVillagerBtnProps) {
  return (
    <button
      className="btn btn-emerald flex gap-2 items-center border-none"
      onClick={onClick}
    >
      <PlusIcon size={14} />{" "}
      <p>
        Add <span className="max-sm:hidden">Villager</span>
      </p>
    </button>
  );
}
