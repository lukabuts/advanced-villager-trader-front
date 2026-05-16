import { Sparkles } from "lucide-react";
import type { CuredBadgeProps } from "./types";
import { cn } from "@/lib/utils";

export function CuredBadge({ className = "" }: CuredBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1",
        "bg-cured-bg border border-cured-border",
        "text-cured-text font-mojangles",
        "text-[10px] px-1.5 py-px rounded-sm",
        className,
      )}
    >
      <Sparkles size={10} className="shrink-0" />
      Cured
    </span>
  );
}
