import { useGoBack } from "@/hooks";
import { MinecraftButton } from "./minecraft-button";
import type { SelectWorldBtnsProps } from "@/types";

export const SelectWorldBtns = ({
  selectedWorldId,
  navigateToWorld,
  onDelete,
  onEdit,
  onCreate,
}: SelectWorldBtnsProps) => {
  const goBack = useGoBack();

  return (
    <div className="w-full max-w-3xl mt-2 flex flex-col gap-2 px-4">
      <div className="flex gap-2 max-sm:flex-wrap">
        <MinecraftButton
          disabled={selectedWorldId === null}
          label="Play Selected World"
          onClick={() => navigateToWorld(selectedWorldId!)}
          className="w-full"
        />
        <MinecraftButton
          label="Create New World"
          className="w-full"
          onClick={onCreate}
        />
      </div>
      <div className="flex gap-2 w-full max-sm:flex-col">
        <div className="flex sm:w-1/2 gap-2">
          <MinecraftButton
            disabled={selectedWorldId === null}
            label="Edit"
            className="max-sm:w-full"
            onClick={onEdit}
          />
          <MinecraftButton
            disabled={selectedWorldId === null}
            label="Delete"
            className="max-sm:w-full"
            onClick={onDelete}
          />
        </div>
        <div className="flex sm:w-1/2 gap-2">
          <MinecraftButton
            disabled={selectedWorldId === null}
            label="Re-Create"
            className="max-sm:w-full max-sm:hidden"
            onClick={() => {}}
          />
          <MinecraftButton
            label="Back"
            className="max-sm:w-full"
            onClick={goBack}
          />
        </div>
      </div>
    </div>
  );
};
