export interface MinecraftTextProps {
  children: React.ReactNode;
  style?: "white" | "gray";
  className?: string;
}

export interface MinecraftButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface LoadingScreenProps {
  fullScreen?: boolean;
}

export interface SelectWorldProps {
  mode: "singleplayer" | "multiplayer";
}
