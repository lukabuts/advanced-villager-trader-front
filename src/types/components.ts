import type { World } from "./world";

export interface MinecraftTextProps {
  children: React.ReactNode;
  style?: "white" | "gray" | "green";
  shadow?: boolean;
  className?: string;
}

export interface MinecraftButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface LoadingScreenProps {
  fullScreen?: boolean;
}

export interface SelectWorldCardProps {
  world: World;
  isSelected: boolean;
  onSelect: () => void;
  navigateToWorld: (worldId: World["id"]) => void;
}

export interface SelectWorldBtnsProps {
  selectedWorldId: World["id"] | null;
  navigateToWorld: (worldId: World["id"]) => void;
  onDelete: () => void;
  onEdit: () => void;
  onCreate: () => void;
}

export interface EditWorldCardProps {
  defaultValue: string;
  updateName: (name: string) => void;
}

export interface MinecraftSearchInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (name: string) => void;
  initialValue?: string;
  onConfirm?: (name: string) => void;
  autoFocus?: boolean;
  error?: string | null;
}

export interface ModalProps {
  title: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface FilterProfBtnProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface StatsPanelProps {
  world: World;
}

export interface SidebarProps {
  world: World;
  className?: string;
}

export interface ContentProps {
  world: World;
}

export interface WorldModalWrapperProps {
  onCancel: () => void;
  onSubmit: () => void;
  label: string;
  children: React.ReactNode;
  title: string;
}
