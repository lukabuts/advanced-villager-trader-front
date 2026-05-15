import { useNotificationStore } from "@/store/notificationStore";

export function Notification() {
  const { message, type, visible, hide } = useNotificationStore();

  return (
    <div
      onClick={hide}
      className={`fixed bottom-5 z-300 px-4 py-3 font-mojangles text-sm transition-all duration-300 cursor-pointer ${visible ? "translate-x-0 left-5 opacity-100" : "translate-x-[-120%] -left-5 shadow-2xl opacity-0"} ${type === "error" ? "bg-red text-white" : "bg-panel border border-emerald text-emerald"}`}
    >
      {message}
    </div>
  );
}
