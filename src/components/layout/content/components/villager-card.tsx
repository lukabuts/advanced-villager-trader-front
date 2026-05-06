import { VillagerIcon } from "@/assets/icons";
import { PROF_COLORS, PROF_EMOJI } from "@/constants";
import type { VillagerCardProps } from "./types";

export function VillagerCard({ villager, search }: VillagerCardProps) {
  function highlight(text: string, query: string) {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  }
  return (
    <div
      key={villager.id}
      className="villager-card flex flex-col bg-panel border border-border rounded-2.5 relative overflow-hidden"
    >
      <div
        className="card-profession-banner h-1 rounded-t-2.5"
        style={{ backgroundColor: PROF_COLORS[villager.profession] }}
      />
      <div className="p-3.5 pb-2.5 flex items-start gap-2.5">
        <VillagerIcon className="size-11 shrink-0 rounded-md border border-border bg-bg-2" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-content wrap-break-word mb-1">
            {villager.name}
          </div>
          <div className="text-13 text-emerald-dark">
            {PROF_EMOJI[villager.profession]} {villager.profession}
          </div>
          {villager.notes && (
            <div className="text-13 text-content-muted mt-1 line-clamp-2">
              {villager.notes}
            </div>
          )}
        </div>
      </div>
      {villager.trades.length > 0 && (
        <div className="px-3.5 pb-2.5 flex flex-col gap-2 max-h-45 overflow-y-auto">
          {villager.trades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between gap-2 py-1 px-2 bg-bg-2 rounded-sm border border-border-light text-sm"
            >
              <span className="flex-1 text-content text-13">
                {highlight(trade.name, search)}
              </span>

              <span className="font-semibold text-emerald-dark text-xs">
                {trade.cost}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="border-t border-border-light p-3.5 pt-2.5 flex  gap-1.5 flex-wrap mt-auto">
        <button className="btn btn-stone btn-sm">✏ Edit</button>
        <button className="btn btn-red btn-sm">☠ Kill</button>
      </div>
    </div>
  );
}
