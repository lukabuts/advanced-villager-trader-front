import { MinecraftButton, MinecraftText } from "@/components/ui";
import { useGoBack } from "@/hooks";
import grassBlock from "@/assets/images/grass_block_2d_70X70.jpeg";
import { Play } from "lucide-react";
import type { SelectWorldProps } from "@/types";

const SelectWorld = ({ mode }: SelectWorldProps) => {
  console.log("Mode:", mode);
  const goBack = useGoBack();
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex flex-col items-center gap-4 pt-6">
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4">
        <MinecraftText style="white">
          <h1>Select World</h1>
        </MinecraftText>
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-3xl px-4 py-2 bg-black text-white font-mojangles  focus:outline-none focus:ring-3 focus:ring-white text-lg "
        />
      </div>

      <div className="bg-black/40 backdrop-blur-md w-full flex justify-center double-b-shadow h-full sm:max-h-[calc(100vh-17rem)] max-h-[calc(100dvh-22rem)]">
        <div className="max-w-2xl w-full px-4 py-2 flex flex-col gap-2 overflow-y-auto mc-scrollbar">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="group relative">
                <button className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/20 size-16  items-center justify-center">
                  <Play className="size-12 text-mc" />
                </button>
                <img src={grassBlock} alt="Grass Block" className="size-16" />
              </div>
              <div>
                <MinecraftText style="white" className="text-base">
                  World #{i + 1}
                </MinecraftText>
                <MinecraftText className="text-base">
                  Created At: 2/20/2024
                </MinecraftText>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl mt-2 flex flex-col gap-2 px-4">
        <div className="flex gap-2 max-sm:flex-wrap">
          <MinecraftButton
            disabled={true}
            label="Play Selected World"
            onClick={() => {}}
            className="w-full"
          />
          <MinecraftButton
            label="Create New World"
            className="w-full"
            onClick={() => {}}
          />
        </div>
        <div className="flex gap-2 w-full max-sm:flex-col">
          <div className="flex sm:w-1/2 gap-2">
            <MinecraftButton
              disabled={true}
              label="Edit"
              className="max-sm:w-full"
              onClick={() => {}}
            />
            <MinecraftButton
              disabled={true}
              label="Delete"
              className="max-sm:w-full"
              onClick={() => {}}
            />
          </div>
          <div className="flex sm:w-1/2 gap-2">
            <MinecraftButton
              disabled={true}
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
    </div>
  );
};

export default SelectWorld;
