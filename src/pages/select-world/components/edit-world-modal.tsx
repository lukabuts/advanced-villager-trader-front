import { MinecraftSearchInput, WorldModalWrapper } from "@/components/ui";
import { useModalStore, useWorldStore } from "@/store";
import type { WorldModalProps } from "./types";
import { useWorldNameField } from "@/hooks";

export function EditWorldModal({
  selectedWorld,
  clearSelection,
}: WorldModalProps) {
  const { name, error, handleChange, validate } = useWorldNameField(
    selectedWorld?.name,
  );
  const { renameWorld } = useWorldStore();
  const { close } = useModalStore();

  const handleEdit = () => {
    if (!selectedWorld?.id || !validate(name)) return;
    renameWorld(selectedWorld.id, name);
    clearSelection();
    close();
  };

  return (
    <WorldModalWrapper
      title="Edit World"
      onCancel={close}
      onSubmit={handleEdit}
      label="Edit"
    >
      <MinecraftSearchInput
        placeholder="World Name"
        autoFocus
        initialValue={name}
        onChange={handleChange}
        onConfirm={handleEdit}
        error={error}
      />
    </WorldModalWrapper>
  );
}
