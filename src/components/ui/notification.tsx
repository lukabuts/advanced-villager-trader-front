import { useNotificationStore } from "@/store/notificationStore";

export function Notification() {
  const { message, type, visible, hide } = useNotificationStore();

  if (!visible) return null;
  return (
    <div
      onClick={hide}
      className={`fixed top-5 z-300 px-4 py-3 font-mojangles text-sm transition-transform duration-300 cursor-pointer ${visible ? "translate-x-0 right-5" : "translate-x-[120%] -right-5"} ${type === "error" ? "bg-red text-white" : "bg-panel border border-emerald text-emerald"}`}
    >
      {message}
    </div>
  );
}
