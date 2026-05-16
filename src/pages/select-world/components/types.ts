import type { World } from "@/types";

export interface WorldModalProps {
  selectedWorld?: World | null;
  clearSelection: () => void;
}

export interface ManageDataModalProps {
  initialValue?: string;
  initialEditing?: boolean;
}

export interface SelectWorldCardProps {
  world: World;
  isSelected: boolean;
  onSelect: () => void;
  navigateToWorld: (worldId: World["id"]) => void;
}

export interface SelectWorldBtnsProps {
  selectedWorld: World | null;
  navigateToWorld: (worldId: World["id"] | null) => void;
  clearSelection: () => void;
}
