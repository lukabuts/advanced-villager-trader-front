import { useState } from "react";
import { VillagerModalWrapper } from "./villager-card/components";
import { PROF_EMOJI, PROFESSIONS, type Profession } from "@/constants";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import emerald_icon from "@/assets/images/mc_emerald.png";

function ModalLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="uppercase text-xs font-semibold text-content-dim tracking-wider"
    >
      {children}
    </label>
  );
}

export function VillagerModal({ type }: { type: "edit" | "add" }) {
  const generalInputClass =
    "bg-bg-2 border border-border rounded-md text-content text-sm py-2.5 px-3 outline-none focus:border-emerald";
  const [profession, setProfession] = useState<Profession | "">("");
  const [customName, setCustomName] = useState("");
  const [notes, setNotes] = useState("");
  // const [trades, setTrades] = useState<Trade[]>([]);
  const [tradeName, setTradeName] = useState("");
  const [tradeCost, setTradeCost] = useState<number | null>(null);
  return (
    <VillagerModalWrapper
      type={type}
      title={`${type === "add" ? "Add New" : "Edit"} Villager`}
      onConfirm={() => {}}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.25">
          <ModalLabel htmlFor="select-profession">profession *</ModalLabel>
          <select
            name="profession"
            id="select-profession"
            className={cn(
              "pr-8 cursor-pointervtransition-shadow shadow-lg appearance-none",
              generalInputClass,
            )}
            value={profession}
            onChange={(e) => setProfession(e.target.value as Profession | "")}
          >
            <option value="">-- Select Profession --</option>
            {PROFESSIONS.map((prof) => (
              <option key={prof} value={prof}>
                {PROF_EMOJI[prof]} {prof}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.25">
          <ModalLabel htmlFor="custom-name">Custom Name (optional)</ModalLabel>
          <input
            type="text"
            name="custom-name"
            id="custom-name"
            className={generalInputClass}
            placeholder="Leave blank for auto-name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value.trim())}
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
            onChange={(e) => setNotes(e.target.value.trim())}
          />
        </div>
        <div className="flex flex-col gap-1.25">
          <ModalLabel htmlFor="trade-name">Trades</ModalLabel>
          <div className="flex flex-col gap-1.5 max-h-55 overflow-y-auto pr-1">
            {/* {trades.length === 0 && ( */}
            <div className="text-content-muted text-13 italic text-center py-2">
              No trades yet — add below
            </div>
            {/* )} */}
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              name="trade-name"
              id="trade-name"
              className={generalInputClass + " flex-1"}
              placeholder="Trade name..."
              value={tradeName}
              onChange={(e) => setTradeName(e.target.value.trim())}
            />
            <div className="relative">
              <img
                src={emerald_icon}
                alt="Emerald"
                className="size-4 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                type="number"
                name="trade-cost"
                id="trade-cost"
                className={generalInputClass + " w-32 pl-6"}
                placeholder="Trade cost..."
                value={tradeCost || ""}
                onChange={(e) =>
                  setTradeCost(e.target.value ? Number(e.target.value) : null)
                }
                min={0}
              />
            </div>
            <button className="btn btn-sm btn-emerald p-2 w-fit">
              <PlusIcon size={14} />
            </button>
          </div>
        </div>
      </div>
    </VillagerModalWrapper>
  );
}
