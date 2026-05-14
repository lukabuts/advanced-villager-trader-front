import { VillagerIcon } from "@/assets/icons";
import { PROF_COLORS, PROF_EMOJI } from "@/constants";
import type { VillagerCardProps } from "../types";
import { TradeCard, VillagerCardBtns } from "./components";

export function VillagerCard({ world, villager, search }: VillagerCardProps) {
  const buyTrades = villager.trades.filter((t) => t.type === "buy");
  const sellTrades = villager.trades.filter((t) => t.type === "sell");
  return (
    <div
      className={`villager-card flex flex-col bg-panel border border-border rounded-2.5 relative ${villager.dead ? "opacity-80" : ""} animate-fade-in flex-none shadow-lg`}
    >
      <div
        className="card-profession-banner h-1 rounded-t-2.5"
        style={{ backgroundColor: PROF_COLORS[villager.profession] }}
      />
      <div className="p-3.5 pb-2.5 flex items-start gap-2.5">
        <VillagerIcon
          className="size-11 shrink-0 rounded-md border border-border bg-bg-2"
          color={PROF_COLORS[villager.profession]}
        />
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
        <div
          className={`px-3.5 pb-2.5 flex flex-col gap-2 min-scrollbar max-h-36 overflow-y-auto border-t border-border-light pt-1 ${villager.notes ? "" : "mt-5.5"}`}
        >
          {buyTrades.length > 0 && (
            <>
              <div className="text-xs font-semibold text-content-muted uppercase tracking-wider">
                Buying From Villager
              </div>
              {buyTrades.map((trade) => (
                <TradeCard key={trade.id} trade={trade} search={search} />
              ))}
            </>
          )}
          {sellTrades.length > 0 && (
            <>
              <div className="text-xs font-semibold text-content-muted uppercase tracking-wider">
                Selling To Villager
              </div>
              {sellTrades.map((trade) => (
                <TradeCard key={trade.id} trade={trade} search={search} />
              ))}
            </>
          )}
        </div>
      )}
      <VillagerCardBtns world={world} villager={villager} />
    </div>
  );
}
