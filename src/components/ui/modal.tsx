import { useModalStore } from "@/store/modalStore";

export function Modal() {
  const { isOpen, content, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-200 flex items-center justify-center p-5 w-dvw h-dvh"
      onClick={close}
    >
      <div
        className="w-full max-w-xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
}
