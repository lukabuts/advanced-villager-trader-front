import { AddVillagerBtn, NavBtn } from "./components";

export function Content() {
  return (
    <div className="flex flex-col gap-3 text-nowrap">
      <div className="flex justify-between border-b border-border">
        <div className="flex gap-1 font-sans text-sm text-content-dim">
          <NavBtn type="alive" className="text-emerald-dark border-border" />
          <NavBtn type="dead" className="text-red border-red" />
        </div>
        <AddVillagerBtn />
      </div>
    </div>
  );
}
