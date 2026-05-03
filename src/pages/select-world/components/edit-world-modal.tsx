import { MinecraftSearchInput, Modal } from "@/components/ui";
import { useWorldStore } from "@/store";
import type { World } from "@/types";
import { useState } from "react";

export function EditWorldModal({
  selectedWorld,
  clearSelection,
  handleClose,
}: {
  selectedWorld: World;
  clearSelection: () => void;
  handleClose: () => void;
}) {
  const [name, setName] = useState(selectedWorld.name);
  const [editError, setEditError] = useState<string | null>(null);
  const { renameWorld } = useWorldStore();
  const handleEdit = () => {
    if (!selectedWorld.id || !selectedWorld) return;
    if (!name.trim()) {
      setEditError("World name cannot be empty.");
      return;
    }
    renameWorld(selectedWorld.id, name);
    clearSelection();
    handleClose();
  };

  return (
    <Modal title="Edit World" onConfirm={handleEdit} onClose={handleClose}>
      <MinecraftSearchInput
        placeholder="World Name"
        autoFocus={true}
        initialValue={name}
        onChange={(v) => {
          const value = v.trim();
          setName(value);
          if (editError && value.length > 0) setEditError(null);
        }}
        onConfirm={handleEdit}
        error={editError}
      />
    </Modal>
  );
}
