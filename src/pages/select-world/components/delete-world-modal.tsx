import { useModalStore, useWorldStore } from "@/store";
import { WorldModalWrapper } from "@/components/ui";
import type { WorldModalProps } from "./types";

export function DeleteWorldModal({
  selectedWorld,
  clearSelection,
}: WorldModalProps) {
  const { close } = useModalStore();
  const { deleteWorld } = useWorldStore();
  function handleDelete() {
    if (!selectedWorld) return;
    deleteWorld(selectedWorld.id);
    clearSelection();
    close();
  }
  return (
    <WorldModalWrapper
      title="Delete World"
      onCancel={close}
      onSubmit={handleDelete}
      label="Delete"
    >
      <p>
        Are you sure you want to delete{" "}
        <span className="text-white">{selectedWorld?.name}</span>? This action
        cannot be undone.
      </p>
    </WorldModalWrapper>
  );
}
