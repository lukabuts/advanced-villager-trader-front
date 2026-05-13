import type { Villager, World } from "@/types";
import { VillagerModalWrapper } from "./villager-modal-wrapper";
import { RecycleIcon } from "lucide-react";
import { useModalStore, useWorldStore } from "@/store";
import type { VillagerCardBtnsProps } from "./types";

function DeleteModalContent({
  villager,
  worldId,
  type = "kill",
}: VillagerCardBtnsProps) {
  const { deleteVillager, killVillager } = useWorldStore();

  return (
    <VillagerModalWrapper
      onConfirm={() => {
        if (type === "delete") deleteVillager(worldId, villager.id);
        else killVillager(worldId, villager.id);
      }}
      type={type}
      title={type === "kill" ? "Kill Villager" : "Delete Villager"}
    >
      Are you sure you want to{" "}
      {type === "delete" ? "permanently delete" : "kill"}{" "}
      <span className="text-white font-bold">{villager.name}</span>?{" "}
      {type === "delete"
        ? "This action cannot be undone."
        : "This villager can be revived later."}
    </VillagerModalWrapper>
  );
}

export function VillagerCardBtns({
  world,
  villager,
}: {
  world: World;
  villager: Villager;
}) {
  const { reviveVillager } = useWorldStore();
  const { open } = useModalStore();

  return (
    <div className="border-t border-border-light p-3.5 pt-2.5 flex  gap-1.5 flex-wrap mt-auto justify-end">
      {villager.dead ? (
        <>
          <button
            onClick={() => {
              reviveVillager(world.id, villager.id);
            }}
            className="btn btn-stone btn-sm flex items-center gap-2"
          >
            <RecycleIcon size={14} /> Revive
          </button>
          <button
            onClick={() => {
              open(
                <DeleteModalContent
                  type="delete"
                  villager={villager}
                  worldId={world.id}
                />,
              );
            }}
            className="btn btn-red btn-sm"
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-stone btn-sm">✏ Edit</button>
          <button
            onClick={() => {
              open(
                <DeleteModalContent villager={villager} worldId={world.id} />,
              );
            }}
            className="btn btn-red btn-sm"
          >
            ☠ Kill
          </button>
        </>
      )}
    </div>
  );
}
