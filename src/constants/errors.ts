const maxWorldNameLength =
  Number(import.meta.env.VITE_MAX_WORLD_NAME_LENGTH) || 32;

export const WORLD_NAME_ERROR = {
  empty: "World name is required.",
  too_long: `World name cannot exceed ${maxWorldNameLength} characters.`,
} as const;
