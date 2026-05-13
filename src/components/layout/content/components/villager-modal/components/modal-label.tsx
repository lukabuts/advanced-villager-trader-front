import type { ModalLabelProps } from "./types";

export function ModalLabel({ htmlFor, children }: ModalLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="uppercase text-xs font-semibold text-content-dim tracking-wider"
    >
      {children}
    </label>
  );
}
