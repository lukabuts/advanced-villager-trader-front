import { VILLAGER_LINES } from "@/constants";
import { VillagerIcon } from "@/assets/icons";
import { ArrowLeft } from "lucide-react";
import { useGoBack } from "@/hooks";
import { useState } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function NotFound({
  type = "page",
  className,
}: {
  type?: "page" | "world";
  className?: string;
}) {
  const [line] = useState(
    () => VILLAGER_LINES[Math.floor(Math.random() * VILLAGER_LINES.length)],
  );

  const goBack = useGoBack();

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-bg relative overflow-hidden",
        type === "page" ? "min-h-screen" : "min-h-content-header",
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(90,158,111,0.04),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(138,110,74,0.04),transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-10 max-w-md w-full">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-serif text-[clamp(80px,18vw,120px)] font-semibold text-emerald leading-none select-none">
            4
          </span>
          <VillagerIcon className="w-[clamp(60px,14vw,90px)] h-[clamp(60px,14vw,90px)]" />
          <span className="font-serif text-[clamp(80px,18vw,120px)] font-semibold text-emerald leading-none select-none">
            4
          </span>
        </div>

        <div className="relative bg-panel border border-border rounded-[10px] px-4 py-3 mb-6 min-h-12 min-w-65 flex items-center justify-center">
          <p className="font-mojangles text-sm text-content-dim italic m-0 min-h-5">
            {line}
          </p>
        </div>

        <h1 className="font-press-start-2p text-[clamp(20px,4vw,26px)] font-semibold text-content mb-2 tracking-tight">
          {type === "page" ? "Page not found" : "World not found"}
        </h1>
        <p className="font-mojangles text-sm text-content-dim leading-relaxed mb-8">
          This corner of the trading hall doesn't exist.
          <br />
          Maybe the villager moved. Maybe it never did.
        </p>

        <Button
          className="font-press-start-2p text-xs"
          variant="link"
          onClick={goBack}
        >
          <ArrowLeft size={15} />
          Go Back
        </Button>
      </div>

      <div className="grass-strip fixed bottom-0 left-0 right-0" />
    </div>
  );
}
