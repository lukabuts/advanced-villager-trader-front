import { FilterProfBtn } from "@/components/ui";
import { PROF_EMOJI } from "@/constants";
import type { ProfessionFilterProps } from "@/types";

export function ProfessionFilter({
  availableProfessions,
  activeProfessions,
  handleProfessionChange,
}: ProfessionFilterProps) {
  return (
    <div className="panel">
      <div className="panel-title">👥 Filter by Profession</div>

      <div className="flex flex-wrap gap-1.5">
        {/* All button */}
        <FilterProfBtn
          onClick={() => handleProfessionChange("all")}
          active={activeProfessions === "all"}
        >
          All
        </FilterProfBtn>

        {/* Only available professions */}
        {availableProfessions.map((prof) => (
          <FilterProfBtn
            onClick={() => handleProfessionChange(prof)}
            active={activeProfessions.includes(prof)}
            key={prof}
          >
            {PROF_EMOJI[prof]} {prof}
          </FilterProfBtn>
        ))}
      </div>
    </div>
  );
}
