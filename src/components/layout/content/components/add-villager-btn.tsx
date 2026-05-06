import { PlusIcon } from "lucide-react";

export function AddVillagerBtn() {
  return (
    <button
      className="btn btn-emerald flex gap-2 items-center border-none"
      onClick={() => {}}
    >
      <PlusIcon size={14} />{" "}
      <p>
        Add <span className="max-sm:hidden">Villager</span>
      </p>
    </button>
  );
}
