import { cn } from "@/lib/utils";
import type { SearchTradesProps } from "./types";

export function SearchTrades({
  onSearchChange,
  searchValue,
  className,
}: SearchTradesProps) {
  return (
    <div className={cn("panel", className)}>
      <div className="panel-title">🔍 Search Trades</div>

      <div className="relative">
        <input
          type="text"
          placeholder="e.g. silk touch..."
          className="form-input pr-8"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none">
          ⚲
        </span>
      </div>
    </div>
  );
}
