import { worldNameSchema } from "@/schemas";
import { useState } from "react";

export function useWorldNameField(initialValue = "") {
  const [name, setName] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    const result = worldNameSchema.safeParse({ name: value });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "");
      return false;
    }
    setError(null);
    return true;
  };

  const handleChange = (v: string) => {
    const trimmed = v.trim();
    setName(trimmed);
    validate(trimmed);
  };

  return { name, error, handleChange, validate };
}
