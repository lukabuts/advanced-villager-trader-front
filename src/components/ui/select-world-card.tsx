import type { SelectWorldCardProps } from "@/types";
import { Play } from "lucide-react";
import { MinecraftText } from "./minecraft-text";
import grassBlock from "@/assets/images/grass_block_2d_70X70.jpeg";

export function SelectWorldCard({
  world,
  isSelected,
  onSelect,
  navigateToWorld,
}: SelectWorldCardProps) {
  return (
    <div
      className={`flex gap-4 items-center p-0.5 cursor-pointer border-2  ${isSelected ? "border-white" : "hover:border-white border-transparent"}`}
      onClick={onSelect}
    >
      <div
        className="group relative"
        onClick={(e) => {
          e.stopPropagation();
          navigateToWorld(world.id);
        }}
      >
        <button className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/20 size-16  items-center justify-center">
          <Play className="size-12 text-mc" />
        </button>
        <img src={grassBlock} alt="Grass Block" className="size-16" />
      </div>
      <div>
        <MinecraftText style="white" className="text-base">
          {world.name}
        </MinecraftText>
        <MinecraftText className="text-base">
          Created At:{" "}
          {world.createdAt
            ? new Date(world.createdAt).toLocaleString()
            : "Unknown"}
        </MinecraftText>
      </div>
    </div>
  );
}
