import { cn } from "@/lib/utils";
import type { FilterProfBtnProps } from "@/types";

export function FilterProfBtn({
  onClick,
  active,
  children,
  className,
}: FilterProfBtnProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-sans text-xs font-medium px-2.5 py-1 rounded-full",
        "border transition-all duration-150 cursor-pointer",
        active
          ? "bg-emerald border-emerald-dark text-white"
          : "bg-bg-2 border-border text-content-dim hover:border-emerald hover:text-emerald hover:bg-emerald-light",
        className,
      )}
    >
      {children}
    </button>
  );
}
