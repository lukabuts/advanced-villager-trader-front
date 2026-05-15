import { useGoBack } from "@/hooks";
import type { SelectWorldBtnsProps } from "@/types";
import { useModalStore } from "@/store";
import {
  CreateWorldModal,
  EditWorldModal,
  DeleteWorldModal,
  ManageDataModal,
} from "../components";
import { MinecraftButton } from "@/components/ui";

export const SelectWorldBtns = ({
  selectedWorld,
  navigateToWorld,
  clearSelection,
}: SelectWorldBtnsProps) => {
  const goBack = useGoBack();
  const { open } = useModalStore();

  return (
    <div className="w-full max-w-3xl mt-2 flex flex-col gap-2 px-4">
      <div className="flex gap-2 max-sm:flex-wrap">
        <MinecraftButton
          disabled={selectedWorld === null}
          label="Play Selected World"
          onClick={() => navigateToWorld(selectedWorld?.id ?? null)}
          className="w-full"
        />
        <MinecraftButton
          label="Create New World"
          className="w-full"
          onClick={() => open(<CreateWorldModal />)}
        />
      </div>
      <div className="flex gap-2 max-sm:flex-col">
        <div className="flex sm:w-[calc(50%-4px)] gap-2">
          <MinecraftButton
            disabled={selectedWorld === null}
            label="Edit"
            className="max-sm:w-full"
            onClick={() =>
              open(
                <EditWorldModal
                  selectedWorld={selectedWorld}
                  clearSelection={clearSelection}
                />,
              )
            }
          />
          <MinecraftButton
            disabled={selectedWorld === null}
            label="Delete"
            className="max-sm:w-full"
            onClick={() =>
              open(
                <DeleteWorldModal
                  selectedWorld={selectedWorld}
                  clearSelection={clearSelection}
                />,
              )
            }
          />
        </div>
        <div className="flex sm:w-[calc(50%-4px)] gap-2">
          <MinecraftButton
            label="Manage Data"
            className="max-sm:w-full"
            onClick={() => {
              open(<ManageDataModal />);
            }}
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
