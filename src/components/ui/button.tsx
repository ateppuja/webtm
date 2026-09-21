import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "navy" | "blue" | "ghost" | "link" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

    const variantStyles = {
      primary:
        "bg-accent-yellow hover:bg-accent-yellow-hover text-navy-900 font-semibold shadow-subtle hover:shadow-elevated focus-visible:ring-accent-yellow active:scale-[0.98]",
      secondary:
        "border-2 border-navy-900 text-navy-900 hover:bg-navy-900/5 focus-visible:ring-navy-900 active:scale-[0.98]",
      navy:
        "bg-navy-900 hover:bg-navy-800 text-white shadow-subtle hover:shadow-elevated focus-visible:ring-navy-900 active:scale-[0.98]",
      blue:
        "bg-brand-blue hover:bg-navy-600 text-white shadow-subtle hover:shadow-elevated focus-visible:ring-brand-blue active:scale-[0.98]",
      outline:
        "border border-slate-300 bg-white hover:bg-slate-50 text-text-primary focus-visible:ring-navy-500 active:scale-[0.98]",
      ghost:
        "text-text-primary hover:bg-slate-100 hover:text-navy-900 focus-visible:ring-navy-500",
      link:
        "text-brand-blue underline-offset-4 hover:underline p-0 h-auto font-normal focus-visible:ring-brand-blue",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-sm rounded-lg min-h-[36px]",
      md: "h-11 px-5 text-base rounded-xl min-h-[44px]", // Min touch target 44px
      lg: "h-13 px-7 text-lg rounded-2xl min-h-[52px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
