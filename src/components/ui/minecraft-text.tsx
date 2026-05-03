import { cn } from "@/lib/utils";
import type { MinecraftTextProps } from "@/types";

export function MinecraftText({
  children,
  style = "gray",
  shadow = true,
  className,
}: MinecraftTextProps) {
  return (
    <div
      className={cn(
        "font-mojangles text-2xl",
        !shadow && "text-shadow-none",
        style === "white"
          ? "text-white [text-shadow:2px_2px_#2a2a2a]"
          : style === "gray"
            ? "text-[#aaaaaa] [text-shadow:2px_2px_#2a2a2a]"
            : style === "green"
              ? "text-emerald dark:[text-shadow:2px_2px_#146414] text-shadow-lg"
              : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
