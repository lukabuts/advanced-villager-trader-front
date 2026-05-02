import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store";
import type { ThemeToggleProps } from "@/types";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      className={cn("btn btn-stone p-2", className)}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
