import type { SelectWorldCardProps } from "@/types";
import { MinecraftText } from "./minecraft-text";
import grassBlock from "@/assets/images/grass_block_2d_70X70.jpeg";
import playBtn from "@/assets/images/mc_play_icon.png";
export function SelectWorldCard({
  world,
  isSelected,
  onSelect,
  navigateToWorld,
}: SelectWorldCardProps) {
  return (
    <div
      className={`flex group gap-4 items-center p-0.5 cursor-pointer border-2  ${isSelected ? "border-white bg-black/50" : "hover:border-white border-transparent"}`}
      onClick={onSelect}
    >
      <div
        className="relative"
        onClick={(e) => {
          e.stopPropagation();
          navigateToWorld(world.id);
        }}
      >
        <button
          className={`${isSelected ? "flex" : "hidden"} group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/40 size-16  items-center justify-center`}
        >
          <img src={playBtn} alt="Play" className="h-12" />
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
