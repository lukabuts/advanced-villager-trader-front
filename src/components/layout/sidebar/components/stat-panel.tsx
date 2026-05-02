import { cn } from "@/lib/utils";

interface StatRowProps {
  label: string;
  value: string | number;
  valueClassName?: string;
}

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

export function StatsPanel() {
  return (
    <div className="panel">
      <div className="panel-title">📊 Stats</div>

      <StatRow label="Active Villagers" value={5} />
      <StatRow label="Dead Villagers" value={0} valueClassName="text-red" />
      <StatRow label="Total Trades" value={0} />
      <StatRow label="Professions" value={4} />
      <StatRow label="Most Common" value="Armorer" valueClassName="text-xs" />
    </div>
  );
}
