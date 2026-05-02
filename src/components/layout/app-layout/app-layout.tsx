import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout";

export default function AppLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
