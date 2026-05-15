import type { SelectWorldCardProps } from "@/types";
import grassBlock from "@/assets/images/grass_block_2d_70X70.jpeg";
import playIcon from "@/assets/images/mc_play_icon.png";
import { MinecraftText } from "@/components/ui";
export function SelectWorldCard({
  world,
  isSelected,
  onSelect,
  navigateToWorld,
}: SelectWorldCardProps) {
  return (
    <div
      className={`flex group gap-4 p-0.5 cursor-pointer border-2  ${isSelected ? "border-white bg-black/50" : "hover:border-white border-transparent"}`}
      onClick={onSelect}
    >
      <div
        className="relative shrink-0 size-16"
        onClick={(e) => {
          e.stopPropagation();
          navigateToWorld(world.id);
        }}
      >
        <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/40 size-16  items-center justify-center">
          <img src={playIcon} alt="Play" className="h-12" />
        </div>
        <img src={grassBlock} alt="Grass Block" className="size-16" />
      </div>
      <div>
        <MinecraftText style="white" className="text-base line-clamp-1">
          {world.name}
        </MinecraftText>
        <MinecraftText className="text-base">
          Created At:{" "}
          {world.createdAt
            ? new Date(world.createdAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "Unknown"}
        </MinecraftText>
      </div>
    </div>
  );
}
