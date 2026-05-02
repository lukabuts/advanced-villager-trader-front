import { Modal } from "@/components/ui";
import { useWorldStore } from "@/store";
import type { World } from "@/types";

export function DeleteWorldModal({
  selectedWorldName,
  selectedWorld,
  clearSelection,
  handleClose,
}: {
  selectedWorldName: string;
  selectedWorld: World;
  clearSelection: () => void;
  handleClose: () => void;
}) {
  const { deleteWorld } = useWorldStore();
  function handleDelete() {
    if (!selectedWorld) return;
    deleteWorld(selectedWorld.id);
    clearSelection();
    handleClose();
  }
  return (
    <Modal title="Delete World" onConfirm={handleDelete} onClose={handleClose}>
      <p className="font-mojangles">
        Are you sure you want to delete{" "}
        <span className="text-white">{selectedWorldName}</span>? This action
        cannot be undone.
      </p>
    </Modal>
  );
}
