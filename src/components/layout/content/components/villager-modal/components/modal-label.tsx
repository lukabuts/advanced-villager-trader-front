import { cn } from "@/lib/utils";
import type { ModalLabelProps } from "./types";

export function ModalLabel({ htmlFor, children, className }: ModalLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "uppercase text-xs font-semibold text-content-dim tracking-wider w-fit",
        className,
      )}
    >
      {children}
    </label>
  );
}
