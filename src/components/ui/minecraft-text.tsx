import { cn } from "@/lib/utils";
import type { MinecraftTextProps } from "@/types";

export function MinecraftText({
  children,
  style = "gray",
  className,
}: MinecraftTextProps) {
  return (
    <div
      className={cn(
        "font-mojangles text-2xl",
        style === "white"
          ? "text-white [text-shadow:2px_2px_rgb(63,63,63)]"
          : "text-[#aaaaaa] [text-shadow:2px_2px_rgb(42,42,42)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
