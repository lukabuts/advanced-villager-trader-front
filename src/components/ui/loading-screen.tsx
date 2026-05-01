import type { LoadingScreenProps } from "@/types";
import loadingAnimation from "@/assets/images/loading_animation.gif";
export function LoadingScreen({ fullScreen = true }: LoadingScreenProps) {
  return (
    <div
      className={
        fullScreen
          ? "fixed inset-0 w-full h-full z-50 bg-black flex items-center justify-center"
          : "z-50"
      }
    >
      <div className="w-full px-4 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-1 w-full">
          <h1 className="font-mojangles sm:text-lg">Loading Terrain...</h1>
          <div className="border-2 border-white p-0.5 w-full max-w-64">
            <div className="h-1 w-28 relative overflow-hidden bg-emerald loading-bar animate-bounce">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[wave_1.5s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
        <img src={loadingAnimation} alt="Loading" className="size-36" />
      </div>
    </div>
  );
}
