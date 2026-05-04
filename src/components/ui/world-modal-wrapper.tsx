import { MinecraftButton } from "@/components/ui";
import { useModalStore } from "@/store";
import type { WorldModalWrapperProps } from "@/types";
import { XIcon } from "lucide-react";

export function WorldModalWrapper({
  onCancel,
  onSubmit,
  label,
  children,
  title,
}: WorldModalWrapperProps) {
  const { close } = useModalStore();
  return (
    <div className="px-6 py-4 gap-4 flex flex-col">
      <div className=" border-b border-border font-mojangles text-white flex items-center justify-between pb-4">
        <p className="text-lg">{title}</p>
        <button
          className="btn btn-stone p-1 hover:border-red-900"
          onClick={close}
        >
          <XIcon size={20} />
        </button>
      </div>
      <div> {children}</div>
      <div className="flex gap-2">
        <MinecraftButton onClick={onCancel} label="Cancel" />
        <MinecraftButton label={label} onClick={onSubmit} />
      </div>
    </div>
  );
}
