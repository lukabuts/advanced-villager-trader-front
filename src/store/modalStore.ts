import type { ModalStore } from "@/types";
import { create } from "zustand";

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  open: (content) => set({ isOpen: true, content }),
  close: () => set({ isOpen: false, content: null }),
}));
