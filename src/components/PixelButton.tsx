import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-pixel-pink text-primary-foreground hover:bg-pixel-pink/90",
  secondary: "bg-pixel-cyan text-foreground hover:bg-pixel-cyan/90",
  accent: "bg-pixel-yellow text-foreground hover:bg-pixel-yellow/90",
  ghost: "bg-card text-foreground hover:bg-muted",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-[10px]",
  md: "px-5 py-3 text-xs",
  lg: "px-7 py-4 text-sm",
};

export const PixelButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "font-pixel uppercase tracking-wider border-4 border-foreground transition-all",
        "shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]",
        "active:translate-x-[6px] active:translate-y-[6px] active:shadow-none",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  ),
);
PixelButton.displayName = "PixelButton";
