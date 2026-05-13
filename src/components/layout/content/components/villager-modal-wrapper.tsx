import { useModalStore } from "@/store";
import { XIcon } from "lucide-react";
import type { VillagerModalWrapperProps } from "./types";

export function VillagerModalWrapper({
  children,
  title,
  type,
  onConfirm,
}: VillagerModalWrapperProps) {
  const { close } = useModalStore();
  return (
    <div className="bg-panel rounded-xl overflow-clip border-2 border-border">
      {/* Header */}
      <div className="bg-bg-2 border-b border-border px-5 py-4 flex items-center justify-between">
        <div className="text-base text-content font-semibold">{title}</div>
        <button
          onClick={close}
          className="bg-bg-3 border border-border rounded-md px-2.5 py-1 transition-colors hover:bg-red-900 hover:border-red hover:text-red-200"
        >
          <XIcon size={14} />
        </button>
      </div>
      {/* Body */}
      <div className="p-5">{children}</div>
      {/* Footer */}
      <div className="px-5 py-3.5 border-t border-border bg-bg-2 flex gap-2 justify-end flex-wrap">
        <button className="btn btn-stone" onClick={close}>
          Cancel
        </button>
        <button
          className={`btn ${type === "kill" || type === "delete" ? "btn-red" : "btn-emerald"}`}
          onClick={() => {
            onConfirm();
          }}
        >
          {type === "edit"
            ? "Save"
            : type === "add"
              ? "Add"
              : type === "delete"
                ? "Delete"
                : "Kill"}
        </button>
      </div>
    </div>
  );
}
