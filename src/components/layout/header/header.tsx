import { VillagerIcon } from "@/assets/icons";
import { MinecraftText, ThemeToggle } from "@/components/ui";
import { APP_NAME, APP_SUBTITLE } from "@/constants";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-panel border-b border-border px-6 py-3.5 flex flex-wrap items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <VillagerIcon className="size-10 opacity-85" />
        <MinecraftText style="green">
          <h1 className="text-lg leading-tight">
            {APP_NAME}
            <span className="block text-[0.7em] italic text-gold mt-0.5 ">
              ⛏ {APP_SUBTITLE}
            </span>
          </h1>
        </MinecraftText>
      </div>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle className="max-sm:hidden" />
        <button className="btn btn-stone sm:hidden p-2" onClick={() => {}}>
          <Menu size={20} />
        </button>
        <button className="max-sm:hidden btn btn-emerald" onClick={() => {}}>
          + Add Villager
        </button>
      </div>
    </header>
  );
};

export default Header;
