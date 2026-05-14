import type { TradeCardProps } from "./types";
import emerald_icon from "@/assets/images/mc_emerald.png";

export function TradeCard({ trade, search }: TradeCardProps) {
  const isSell = trade.type === "sell";

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
      className={`flex items-center justify-between gap-2 py-1 px-2 bg-bg-2 rounded-r-sm border border-border-light text-sm border-l-2 ${
        isSell ? "border-l-red" : "border-l-emerald"
      }`}
    >
      <span className="flex-1 text-content text-13 flex items-center gap-1.5">
        {highlight(trade.name, search)}
        {isSell && trade.quantity && (
          <span className="text-content-muted text-xs">{trade.quantity}×</span>
        )}
      </span>

      <span
        className={`font-semibold text-xs flex items-center gap-1 ${
          isSell ? "text-red-dark" : "text-emerald-dark"
        }`}
      >
        <img src={emerald_icon} alt="Emerald" className="size-4" />
        {trade.cost}
      </span>
    </div>
  );
}
