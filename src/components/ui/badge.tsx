import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "navy" | "yellow" | "outline";
}

export function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-blue-50 text-brand-blue border border-blue-100",
    navy: "bg-navy-900 text-white",
    yellow: "bg-amber-50 text-amber-800 border border-amber-200",
    outline: "border border-slate-200 text-text-secondary bg-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
