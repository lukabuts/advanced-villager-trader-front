import { MinecraftSearchInput, WorldModalWrapper } from "@/components/ui";
import { useWorldNameField } from "@/hooks";
import { useModalStore, useWorldStore } from "@/store";

export function CreateWorldModal() {
  const { name, error, handleChange, validate } = useWorldNameField();
  const { createWorld } = useWorldStore();
  const { close } = useModalStore();

  const handleCreate = () => {
    if (!validate(name)) return;
    createWorld(name);
    close();
  };

  return (
    <WorldModalWrapper
      title="Create World"
      onCancel={close}
      onSubmit={handleCreate}
      label="Create"
    >
      <MinecraftSearchInput
        placeholder="World Name"
        autoFocus
        initialValue={name}
        onConfirm={handleCreate}
        onChange={handleChange}
        error={error}
      />
    </WorldModalWrapper>
  );
}
