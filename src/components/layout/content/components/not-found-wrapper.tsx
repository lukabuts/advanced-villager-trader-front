import type { NotFoundWrapperProps } from "./types";

export function NotFoundWrapper({ children, icon }: NotFoundWrapperProps) {
  return (
    <div className="flex flex-col items-center gap-2 mt-8 text-content-dim col-span-full">
      <span className="text-2xl">{icon}</span>

      {children}
    </div>
  );
}
