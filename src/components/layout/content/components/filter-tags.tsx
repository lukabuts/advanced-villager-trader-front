import { useWorldFilters } from "@/hooks";
import { XIcon } from "lucide-react";

interface FilterTagProps {
  filter: string;
  value: string;
  onClick: () => void;
}
function FilterTag({ filter, value, onClick }: FilterTagProps) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-panel border border-border rounded-md py-1.25 px-2.5 text-xs text-content-dim animate-fade-in">
      <span className="text-content-muted text-xs uppercase">{filter}</span>
      <span className="font-semibold text-content">"{value}"</span>
      <button className="hover:text-red transition-colors" onClick={onClick}>
        <XIcon size={12} />
      </button>
    </div>
  );
}

export function FilterTags() {
  const { search, professions, setSearch, removeProfession } =
    useWorldFilters();

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {search && (
        <FilterTag
          filter="Search"
          value={search}
          onClick={() => {
            setSearch("");
          }}
        />
      )}
      {professions !== "all" &&
        professions.map((p) => (
          <FilterTag
            filter="Profession"
            value={p}
            onClick={() => {
              removeProfession(p);
            }}
          />
        ))}
    </div>
  );
}
