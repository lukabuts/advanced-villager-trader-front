import { useModalStore } from "@/store/modalStore";
import { MinecraftButton } from "@/components/ui";
import type { ModalProps } from "@/types";
import { XIcon } from "lucide-react";

export function Modal({
  title,
  onConfirm,
  onCancel,
  onClose,
  children,
}: ModalProps) {
  const { isOpen, close } = useModalStore();
  if (!isOpen) return null;

  const closeModal = () => {
    onClose?.();
    close();
  };
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-200 flex items-center justify-center p-5"
      onClick={closeModal}
    >
      <div
        className="bg-panel border-2 border-border w-full max-w-sm animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border font-mojangles text-white flex items-center justify-between">
          <p className="text-lg">{title}</p>
          <button
            className="btn btn-stone p-1 hover:border-red-900"
            onClick={closeModal}
          >
            <XIcon size={20} />
          </button>
        </div>
        <div className="p-4 pb-3">{children}</div>
        <div className="p-4 pt-1 flex gap-2">
          {onConfirm && <MinecraftButton label="Confirm" onClick={onConfirm} />}
          <MinecraftButton
            label="Cancel"
            onClick={() => {
              onCancel?.();
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
}
