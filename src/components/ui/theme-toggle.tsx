import { useThemeStore } from "@/store";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme} title="Toggle theme">
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </Button>
  );
}
