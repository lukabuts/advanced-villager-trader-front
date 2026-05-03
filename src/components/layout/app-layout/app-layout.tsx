import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout";

export default function AppLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="my-0 mx-auto py-3 sm:px-6 px-3 grid grid-cols-[270px_1fr] gap-3 min-h-content-header max-w-[1980px]">
        <Outlet />
      </main>
    </div>
  );
}
