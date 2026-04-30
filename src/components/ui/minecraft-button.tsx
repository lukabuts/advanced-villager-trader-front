import { cn } from "@/lib/utils";

interface MinecraftButtonProps {
  label: string;
  onClick: () => void;
  full?: boolean;
  small?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MinecraftButton({
  label,
  onClick,
  full,
  small,
  className,
  children,
}: MinecraftButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group", // needed so children can use group-hover / group-active
        "relative cursor-pointer overflow-hidden select-none",
        "bg-[#999] bg-[url('./assets/images/bgbtn.png')] bg-center bg-cover",
        "[image-rendering:pixelated]",
        "border-2 border-black",
        "hover:border-white",

        // sizing — full overrides everything, small is narrow, default is standard MC width
        full
          ? "w-full h-full"
          : small
            ? "h-9 w-50"
            : "h-10 w-100 md:h-12 md:w-120",

        className,
      )}
    >
      {/* Title layer — carries bevel shadow + text color */}
      <span
        className={cn(
          "w-full h-full pb-[0.3em]",
          "flex items-center justify-center",
          "font-mojangles sm:text-base md:text-xl  text-[#dddddd]",
          "[text-shadow:2px_2px_rgba(0,0,0,0.67)]",

          // default inset bevel
          "[box-shadow:inset_-2px_-4px_rgba(0,0,0,0.4),inset_2px_2px_rgba(255,255,255,0.47)]",

          // hover — yellow text + stronger shadow
          "group-hover:text-[#ffffa0]",
          "group-hover:[text-shadow:2px_2px_rgba(32,32,19,0.8)]",

          // active — inset flips to pressed feel
          "group-active:[box-shadow:inset_-2px_-4px_rgba(0,0,0,0.27),inset_2px_2px_rgba(255,255,255,0.33)]",
        )}
      >
        {children ?? label}
      </span>
    </button>
  );
}
