/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { PlusIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TradeType } from "@/types";
import { ENCHANTED_BOOKS, VILLAGER_TRADES } from "@/constants";
import { ModalLabel } from "./modal-label";
import type { SelectTradesProps } from "./types";
import emerald_icon from "@/assets/images/mc_emerald.png";

export function SelectTrades({
  className,
  trades,
  setTrades,
  profession,
}: SelectTradesProps) {
  const avaliableTrades = profession ? VILLAGER_TRADES[profession] : null;

  const [tradeName, setTradeName] = useState("");
  const [tradeCost, setTradeCost] = useState<number | null>(null);
  const [tradeType, setTradeType] = useState<TradeType>("buy");
  const [tradeLevel, setTradeLevel] = useState<number | null>(null);
  const [tradeError, setTradeError] = useState("");

  const defaultQuantity = avaliableTrades?.[tradeType].find(
    (t) => t.id === tradeName,
  )?.quantity;
  const [itemQuantity, setItemQuantity] = useState<number | null>(
    defaultQuantity !== undefined ? defaultQuantity : null,
  );

  const maxLevel = ENCHANTED_BOOKS[tradeName as keyof typeof ENCHANTED_BOOKS];
  const isMaxLevelInputVisible =
    profession === "librarian" &&
    tradeType === "buy" &&
    maxLevel !== undefined &&
    maxLevel !== 1;

  useEffect(() => {
    setItemQuantity(defaultQuantity ?? null);
  }, [defaultQuantity]);

  function handleAddTrade() {
    if (
      !tradeName ||
      !tradeCost ||
      !itemQuantity ||
      (isMaxLevelInputVisible && !tradeLevel)
    ) {
      setTradeError("Please fill in all fields");
      return;
    }
    setTradeError("");
    const finalTradeName =
      avaliableTrades?.[tradeType].find((t) => t.id === tradeName)?.name +
        (tradeLevel ? ` ${tradeLevel}` : "") || "";
    const newTrade = {
      id: tradeName,
      name: finalTradeName,
      cost: tradeCost,
      quantity: itemQuantity || 1,
      type: tradeType,
    };
    if (trades.some((t) => t.id === newTrade.id)) {
      setTradeError("This trade already exists");
      return;
    }
    setTrades([...trades, newTrade]);
    resetTradeInputs();
  }

  function resetTradeInputs() {
    setTradeError("");
    setTradeName("");
    setTradeCost(null);
    setItemQuantity(null);
    setTradeLevel(null);
  }

  return (
    <div className="flex flex-col gap-1.25">
      <ModalLabel htmlFor="trade-name">Trades</ModalLabel>
      <div className={className + " text-xs text-content-muted italic"}>
        <span className="bg-emerald text-content p-0.5">BUY</span> you pay
        emeralds <span className="bg-red text-content p-0.5">SELL</span> you
        give items → get emeralds
      </div>
      <div className="flex flex-col gap-1.5">
        {trades.length === 0 ? (
          <div className="text-content-muted text-13 italic text-center py-2">
            No trades yet — add below
          </div>
        ) : (
          <div
            className="space-y-1.5 min-scrollbar max-h-28 overflow-y-auto;
"
          >
            {trades.map((trade) => (
              <div
                key={trade.id}
                className={className + " flex items-center gap-2"}
              >
                <span
                  className={
                    trade.type === "sell"
                      ? "bg-red"
                      : "bg-emerald" + " text-content p-0.5"
                  }
                >
                  {trade.type.toUpperCase()}
                </span>
                <span>{trade.name}</span>
                {trade.quantity > 1 && <span>{trade.quantity}X</span>}

                <div className="flex items-center">
                  <img src={emerald_icon} alt="Emerald" className="w-4 h-4" />{" "}
                  {trade.cost}
                </div>
                <button
                  className="ml-auto btn btn-sm btn-stone p-1"
                  onClick={() => {
                    setTrades(trades.filter((t) => t.id !== trade.id));
                  }}
                >
                  <XIcon size={14} className="text-red" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="border-dashed border-t-2 border-border pt-2 space-y-2">
          <div className="flex items-center gap-2">
            <select
              name="profession"
              id="select-profession"
              className={cn("cursor-pointer appearance-none flex-1", className)}
              value={
                avaliableTrades?.[tradeType]?.find((t) => t.id === tradeName)
                  ?.id || ""
              }
              onChange={(e) => setTradeName(e.target.value)}
              disabled={profession === ""}
            >
              <option value="">-- Select Trade --</option>

              {avaliableTrades?.[tradeType]
                ?.filter((t) => !trades.some((trade) => trade.id === t.id))
                .map((trade) => (
                  <option key={trade.id} value={trade.id}>
                    {trade.name}
                  </option>
                ))}
            </select>
            <input
              type="number"
              name="item-quantity"
              id="item-quantity"
              className={`${className} ${tradeType === "sell" || (itemQuantity !== null && itemQuantity > 1) ? " w-24" : " hidden"}`}
              placeholder="Quantity..."
              value={itemQuantity || ""}
              onChange={(e) =>
                setItemQuantity(e.target.value ? Number(e.target.value) : null)
              }
              disabled={tradeType === "buy"}
              min={0}
            />

            {isMaxLevelInputVisible && (
              <input
                type="number"
                className={`${className}  w-32`}
                placeholder="Level..."
                value={tradeLevel || ""}
                onChange={(e) => {
                  const value = Number(e.target.value);

                  setTradeLevel(() => {
                    if (value < 0) {
                      return null;
                    } else if (value > maxLevel) {
                      return maxLevel;
                    } else {
                      return value;
                    }
                  });
                }}
                min={0}
                max={maxLevel}
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            <div>
              <button
                onClick={() => {
                  setTradeType("buy");
                }}
                className={`btn btn-sm p-2 w-fit rounded-none border ${tradeType === "buy" ? "btn-emerald border-emerald" : "border-border"}`}
                disabled={profession === ""}
              >
                Buy
              </button>
              <button
                onClick={() => {
                  setTradeType("sell");
                }}
                className={`btn btn-sm p-2 w-fit rounded-none ${tradeType === "sell" ? "btn-red" : "border-border"}`}
                disabled={profession === ""}
              >
                Sell
              </button>
            </div>
            <div className="relative flex-1">
              <img
                src={emerald_icon}
                alt="Emerald"
                className="size-4 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                type="number"
                name="trade-cost"
                id="trade-cost"
                className={className + "  pl-6 w-full"}
                placeholder="Trade cost..."
                value={tradeCost || ""}
                onChange={(e) =>
                  setTradeCost(e.target.value ? Number(e.target.value) : null)
                }
                disabled={profession === ""}
                min={0}
              />
            </div>
            <button
              className="btn btn-sm btn-emerald p-2 w-fit"
              onClick={handleAddTrade}
              disabled={profession === ""}
            >
              <PlusIcon size={14} />
            </button>
          </div>
          {tradeError && (
            <div className="text-red text-xs italic text-center">
              {tradeError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
