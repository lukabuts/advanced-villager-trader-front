import { VillagerIcon } from "@/assets/icons";
import { MinecraftText, ThemeToggle } from "@/components/ui";
import { APP_NAME, APP_SUBTITLE, ROUTES } from "@/constants";
import { useSidebarStore } from "@/store";
import { Menu, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, toggle } = useSidebarStore();
  return (
    <header className="bg-panel border-b border-border sm:px-6 px-3 py-3.5 flex flex-wrap items-center gap-3 shadow-sm select-none not-dark:border-b-border z-50 sticky">
      {/* Logo */}
      <Link to={ROUTES.HOME} className="flex items-center gap-3">
        <VillagerIcon className="size-10 opacity-85" />
        <MinecraftText style="green">
          <h1 className="text-lg leading-tight">
            {APP_NAME}
            <span className="block text-[0.7em] italic text-gold mt-0.5 ">
              ⛏ {APP_SUBTITLE}
            </span>
          </h1>
        </MinecraftText>
      </Link>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <button className="btn btn-stone lg:hidden p-2" onClick={toggle}>
          {isOpen ? <XIcon size={20} /> : <Menu size={20} />}
        </button>
        <button className="max-lg:hidden btn btn-emerald" onClick={() => {}}>
          + Add Villager
        </button>
      </div>
    </header>
  );
};

export default Header;
