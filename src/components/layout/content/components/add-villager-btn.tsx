import { useModalStore } from "@/store";
import { PlusIcon } from "lucide-react";
import { VillagerModal } from "./villager-modal";
import type { World } from "@/types";

export function AddVillagerBtn({ world }: { world: World }) {
  const { open } = useModalStore();
  return (
    <button
      className="btn btn-emerald flex gap-2 items-center border-none"
      onClick={() => {
        open(<VillagerModal world={world} type="add" />);
      }}
    >
      <PlusIcon size={14} />{" "}
      <p>
        Add <span className="max-sm:hidden">Villager</span>
      </p>
    </button>
  );
}
