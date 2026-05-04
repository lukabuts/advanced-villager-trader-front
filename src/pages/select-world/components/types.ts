import type { World } from "@/types";

export interface WorldModalProps {
  selectedWorld?: World | null;
  clearSelection: () => void;
}
