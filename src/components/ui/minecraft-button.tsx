import { cn } from "@/lib/utils";
import type { MinecraftButtonProps } from "@/types";

export function MinecraftButton({
  label,
  onClick,
  className,
  disabled,
  children,
}: MinecraftButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group", // needed so children can use group-hover / group-active
        "relative cursor-pointer overflow-hidden select-none",
        "bg-[#999] bg-[url('./assets/images/bgbtn.png')] bg-center bg-cover",
        "[image-rendering:pixelated]",
        "border-2 border-black",
        "disabled:cursor-not-allowed",
        !disabled ? "hover:border-white" : "",
        "h-10 sm:h-12 w-80 sm:w-120 max-w-full",

        className,
      )}
    >
      {/* Title layer — carries bevel shadow + text color */}
      <span
        className={cn(
          "w-full h-full pb-[0.3em]",
          "flex items-center justify-center",
          "font-mojangles sm:text-xl  text-[#dddddd]",
          "[text-shadow:2px_2px_rgba(0,0,0,0.67)]",

          // default inset bevel
          "[box-shadow:inset_-2px_-4px_rgba(0,0,0,0.4),inset_2px_2px_rgba(255,255,255,0.47)] group-disabled:[box-shadow:none] group-disabled:bg-black/50",

          // hover — yellow text + stronger shadow
          !disabled
            ? "group-hover:text-[#ffffa0] group-hover:[text-shadow:2px_2px_rgba(32,32,19,0.8)]"
            : "",

          // active — inset flips to pressed feel
          "group-active:[box-shadow:inset_-2px_-4px_rgba(0,0,0,0.27),inset_2px_2px_rgba(255,255,255,0.33)]",
        )}
      >
        {children ?? label}
      </span>
    </button>
  );
}
