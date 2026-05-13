import { PROF_EMOJI, PROFESSIONS, type Profession } from "@/constants";
import { ModalLabel } from "./modal-label";
import type { SelectProfessionProps } from "./types";
import { cn } from "@/lib/utils";

export function SelectProfession({
  className,
  profession,
  setProfession,
  trades,
  resetVillagerData,
}: SelectProfessionProps) {
  return (
    <div className="flex flex-col gap-1.25">
      <ModalLabel htmlFor="select-profession">profession *</ModalLabel>
      <select
        name="profession"
        id="select-profession"
        className={cn(
          "pr-8 cursor-pointer appearance-none capitalize",
          className,
        )}
        value={profession}
        onChange={(e) => {
          setProfession(e.target.value as Profession | "");
          resetVillagerData();
        }}
        disabled={trades.length > 0}
      >
        <option value="">-- Select Profession --</option>
        {PROFESSIONS.map((prof) => (
          <option key={prof} value={prof}>
            {PROF_EMOJI[prof]} {prof}
          </option>
        ))}
      </select>
    </div>
  );
}
