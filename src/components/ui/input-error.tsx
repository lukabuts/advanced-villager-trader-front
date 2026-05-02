import { cn } from "@/lib/utils";

interface InputErrorProps {
  message: string | null | undefined;
  className?: string;
}

export function InputError({ message, className }: InputErrorProps) {
  if (!message) return null;

  return (
    <div className={cn("flex items-start gap-2", className)}>
      {/* Pixel X icon */}
      <span
        className="shrink-0 mt-px font-mojangles text-red-400 text-xs leading-none select-none"
        aria-hidden="true"
      >
        ✗
      </span>

      <p className="font-mojangles text-red-400 text-xs leading-relaxed [text-shadow:1px_1px_0px_rgba(0,0,0,0.8)]">
        {message}
      </p>
    </div>
  );
}
