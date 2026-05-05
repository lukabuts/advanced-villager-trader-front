import { cn } from "@/lib/utils";
import type { StatRowProps } from "./types";
import type { StatsPanelProps } from "@/types";

function StatRow({ label, value, valueClassName }: StatRowProps) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border-light last:border-0 text-sm">
      <span className="text-content-dim">{label}</span>
      <span
        className={cn(
          "text-emerald-dark font-semibold text-sm",
          valueClassName,
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function StatsPanel({ world }: StatsPanelProps) {
  const villagers = world.tradingHall.villagers;

  const activeVillagers = villagers.filter((v) => !v.dead).length;
  const deadVillagers = villagers.filter((v) => v.dead).length;
  const totalTrades = villagers.reduce((sum, v) => sum + v.trades.length, 0);

  const professionCounts = villagers.reduce<Record<string, number>>(
    (acc, v) => {
      acc[v.profession] = (acc[v.profession] ?? 0) + 1;
      return acc;
    },
    {},
  );

  const uniqueProfessions = Object.keys(professionCounts).length;
  const mostCommon =
    Object.entries(professionCounts).sort(([, a], [, b]) => b - a)[0]?.[0] ??
    "—";

  return (
    <div className="panel">
      <div className="panel-title">📊 Stats</div>

      <StatRow label="Active Villagers" value={activeVillagers} />
      <StatRow
        label="Dead Villagers"
        value={deadVillagers}
        valueClassName="text-red"
      />
      <StatRow label="Total Trades" value={totalTrades} />
      <StatRow label="Professions" value={uniqueProfessions} />
      <StatRow
        label="Most Common"
        value={mostCommon}
        valueClassName="text-xs"
      />
    </div>
  );
}
