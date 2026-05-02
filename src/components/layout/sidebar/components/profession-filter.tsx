import { PROF_EMOJI, PROFESSIONS } from "@/constants";
import { cn } from "@/lib/utils";

export function ProfessionFilter() {
  return (
    <div className="bg-panel border border-border rounded-[10px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
      {/* Title */}
      <div className="font-serif text-[13px] font-semibold text-content mb-3 pb-2 border-b border-border-light flex items-center gap-1.5">
        👥 Filter by Profession
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-1.5">
        <button
          key="all"
          className={cn(
            "font-sans text-xs font-medium px-2.5 py-1 rounded-full",
            "border transition-all duration-150 cursor-pointer",
            "bg-emerald border-emerald-dark text-white",
          )}
        >
          All
        </button>
        {PROFESSIONS.map((prof) => {
          const emoji = PROF_EMOJI[prof];

          return (
            <button
              key={prof}
              //   onClick={() => onChange(isAll ? "all" : prof)}
              className={cn(
                "font-sans text-xs font-medium px-2.5 py-1 rounded-full",
                "border transition-all duration-150 cursor-pointer",
                "bg-bg-2 border-border text-content-dim hover:border-emerald hover:text-emerald hover:bg-emerald-light",
              )}
            >
              {emoji} {prof}
            </button>
          );
        })}
      </div>
    </div>
  );
}
