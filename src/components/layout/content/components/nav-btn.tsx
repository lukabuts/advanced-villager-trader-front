import { useWorldFilters } from "@/hooks";
import { cn } from "@/lib/utils";
import type { NavBtnProps } from "./types";

export function NavBtn({ type, className }: NavBtnProps) {
  const { status, setStatus } = useWorldFilters();
  return (
    <button
      onClick={() => setStatus(type)}
      className={cn(
        "py-2.5 px-4 rounded-t-md border-b-0 bg-bg font-semibold",
        status === type
          ? "bg-panel border -mb-px border-b-0 " + className
          : " hover:bg-bg-2 hover:text-content",
      )}
    >
      <span>
        {type === "alive"
          ? "⚗ Active Villagers"
          : type === "dead" && "💀 Graveyard"}
      </span>
    </button>
  );
}
