import { useSidebarStore } from "@/store";
import { ProfessionFilter, SearchTrades, StatsPanel } from "./components";
import type { SidebarProps } from "@/types";
import { cn } from "@/lib/utils";

const Sidebar = ({
  availableProfessions,
  handleProfessionChange,
  activeProfessions,
  searchValue,
  onSearchChange,
  className,
}: SidebarProps) => {
  const { isOpen } = useSidebarStore();
  return (
    <aside
      className={cn(
        "lg:block z-20",
        isOpen
          ? "max-lg:fixed inset-0 w-full top-16.5 h-fit border-b border-border py-2 shadow-md dark:shadow-border bg-bg"
          : "hidden",
        className,
      )}
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        <SearchTrades
          onSearchChange={onSearchChange}
          searchValue={searchValue}
        />
        <ProfessionFilter
          availableProfessions={availableProfessions}
          activeProfessions={activeProfessions}
          handleProfessionChange={handleProfessionChange}
        />
        <StatsPanel />
      </div>
    </aside>
  );
};

export default Sidebar;
