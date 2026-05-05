import { useSearchParams } from "react-router-dom";
import type { Profession } from "@/constants";
import { PROFESSIONS } from "@/constants";
import type { VillagerStatus } from "@/types";

export function useWorldFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("s") ?? "";

  const professionsParam = searchParams.get("p");
  const professions: Profession[] | "all" = professionsParam
    ? (professionsParam.split(",") as Profession[])
    : "all";
  const status = (searchParams.get("st") as VillagerStatus | null) ?? "alive";

  const setSearch = (value: string) => {
    setSearchParams(
      (prev) => {
        if (value) prev.set("s", value);
        else prev.delete("s");
        return prev;
      },
      { replace: true },
    );
  };

  const setProfessions = (profession: Profession | "all") => {
    setSearchParams(
      (prev) => {
        if (profession === "all") {
          prev.delete("p");
          return prev;
        }

        const current = (prev.get("p")?.split(",") as Profession[]) ?? [];

        let next: Profession[];
        if (current.includes(profession)) {
          next = current.filter((p) => p !== profession);
        } else {
          next = [...current, profession];
        }

        // normalize to "all" if all selected
        if (next.length === 0 || next.length === PROFESSIONS.length) {
          prev.delete("p");
        } else {
          prev.set("p", next.join(","));
        }

        return prev;
      },
      { replace: true },
    );
  };

  const setStatus = (value: VillagerStatus) => {
    setSearchParams(
      (prev) => {
        if (value === "alive") prev.delete("st");
        else prev.set("st", value);
        return prev;
      },
      { replace: true },
    );
  };

  const reset = () => {
    setSearchParams(
      (prev) => {
        prev.delete("s");
        prev.delete("p");
        prev.delete("st");
        return prev;
      },
      { replace: true },
    );
  };

  return {
    search,
    professions,
    status,
    setSearch,
    setProfessions,
    setStatus,
    reset,
  };
}
