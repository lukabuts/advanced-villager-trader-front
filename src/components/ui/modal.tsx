import { useModalStore } from "@/store/modalStore";
import { MinecraftButton } from "@/components/ui";
import type { ModalProps } from "@/types";

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
        className="bg-panel border-2 border-border w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border font-mojangles text-white">
          {title}
        </div>
        <div className="p-4 pb-2">{children}</div>
        <div className="p-4 pt-2 flex gap-2">
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
