import { ProfessionFilter, SearchTrades, StatsPanel } from "./components";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-3">
      <SearchTrades />
      <ProfessionFilter />
      <StatsPanel />
    </aside>
  );
};

export default Sidebar;
