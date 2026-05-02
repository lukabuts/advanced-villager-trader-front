import { cn } from "@/lib/utils";
import type { MinecraftSearchInputProps } from "@/types";
import { useState } from "react";
import { InputError } from "./input-error";

export function MinecraftSearchInput({
  placeholder,
  className,
  initialValue,
  onConfirm,
  onChange,
  autoFocus = false,
  error,
}: MinecraftSearchInputProps) {
  const [name, setName] = useState(initialValue || "");

  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-2 bg-black text-white font-mojangles focus:outline-none focus:ring-3 focus:ring-white text-lg",
          className,
        )}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          onChange?.(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onConfirm?.(name);
          }
        }}
      />
      <InputError className="mt-2" message={error} />
    </div>
  );
}
