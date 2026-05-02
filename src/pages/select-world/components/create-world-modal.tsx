import { MinecraftSearchInput, Modal } from "@/components/ui";
import { useWorldStore } from "@/store";
import { useState } from "react";

export function CreateWorldModal({ handleClose }: { handleClose: () => void }) {
  const [name, setName] = useState("");
  const [createError, setCreateError] = useState<string | null>(null);

  const { createWorld } = useWorldStore();

  function handleCreate() {
    if (!name.trim()) {
      setCreateError("World name cannot be empty.");
      return;
    }
    createWorld(name.trim());
    handleClose();
  }

  return (
    <Modal title="Create World" onConfirm={handleCreate} onClose={handleClose}>
      <MinecraftSearchInput
        placeholder="World Name"
        initialValue={name}
        autoFocus={true}
        onConfirm={handleCreate}
        onChange={(v) => setName(v)}
        error={createError}
      />
    </Modal>
  );
}
