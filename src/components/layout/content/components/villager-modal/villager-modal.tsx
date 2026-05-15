import { useState } from "react";
import { type Profession } from "@/constants";
import type { Trade } from "@/types";
import { VillagerModalWrapper } from "../villager-modal-wrapper";
import { ModalLabel, SelectProfession, SelectTrades } from "./components";
import { useModalStore, useNotificationStore, useWorldStore } from "@/store";
import type { VillagerModalProps } from "../types";

export function VillagerModal({ world, villager, type }: VillagerModalProps) {
  const generalInputClass =
    "bg-bg-2 border border-border rounded-md text-content text-sm py-2.5 px-3 outline-none focus:border-emerald disabled:cursor-not-allowed disabled:opacity-50 transition-shadow shadow-lg";
  const [profession, setProfession] = useState<Profession | "">(
    villager?.profession || "",
  );
  const [customName, setCustomName] = useState(villager?.name || "");
  const [notes, setNotes] = useState(villager?.notes || "");
  const [trades, setTrades] = useState<Trade[]>(villager?.trades || []);

  const { addVillager, updateVillager } = useWorldStore();
  const { close } = useModalStore();
  const { show } = useNotificationStore();

  function resetVillagerData() {
    setCustomName("");
    setNotes("");
    setTrades([]);
  }

  function handleAddVillager() {
    if (!profession || trades.length === 0) return;
    const villagerName = customName.trim() || generateName(profession);
    addVillager(world.id, {
      profession,
      name: villagerName,
      notes,
      trades,
    });
    close();
    show(`Villager "${villagerName.slice(0, 12)}" added successfully`);
  }

  function handleUpdateVillager() {
    if (!villager || !profession || trades.length === 0) return;
    const villagerName = customName.trim() || generateName(profession);
    updateVillager(world.id, villager.id, {
      name: villagerName,
      notes,
      trades,
    });
    close();
    show(`Villager "${villagerName.slice(0, 12)}" updated successfully`);
  }

  function generateName(profession: Profession) {
    const villagers = world.tradingHall.villagers.filter(
      (v) => v.profession === profession,
    );

    const numbers = villagers.map((v) => {
      const match = v.name.match(/#(\d+)$/);
      return match ? Number(match[1]) : 1;
    });

    const nextNumber = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

    return nextNumber === 1 ? profession : `${profession} #${nextNumber}`;
  }

  function limitNameLength(name: string) {
    if (name.length <= 30) return name;
    return name.slice(0, 30);
  }

  return (
    <VillagerModalWrapper
      type={type}
      title={`${type === "add" ? "Add New" : "Edit"} Villager`}
      onConfirm={() => {
        if (type === "add") {
          handleAddVillager();
        } else {
          handleUpdateVillager();
        }
      }}
    >
      <div className="flex flex-col gap-4">
        <SelectProfession
          profession={profession}
          setProfession={setProfession}
          className={generalInputClass}
          trades={trades}
          resetVillagerData={resetVillagerData}
          type={type}
        />
        <div className="flex flex-col gap-1.25">
          <ModalLabel htmlFor="custom-name">Custom Name (optional)</ModalLabel>
          <input
            type="text"
            name="custom-name"
            id="custom-name"
            className={generalInputClass}
            placeholder="Leave blank for auto-name"
            value={customName}
            onChange={(e) => setCustomName(limitNameLength(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-1.25">
          <ModalLabel htmlFor="notes">Notes (optional)</ModalLabel>
          <input
            type="text"
            name="notes"
            id="notes"
            className={generalInputClass}
            placeholder="e.g. max level, near entrance..."
            value={notes}
            onChange={(e) => setNotes(limitNameLength(e.target.value))}
          />
        </div>
        <SelectTrades
          className={generalInputClass}
          profession={profession}
          trades={trades}
          setTrades={setTrades}
        />
      </div>
    </VillagerModalWrapper>
  );
}
