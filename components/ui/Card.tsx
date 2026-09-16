import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glow = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-[#121218] border border-white/[0.08] p-6 sm:p-7 relative overflow-hidden transition-all duration-300",
        hoverEffect &&
          "hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]",
        glow && "border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.12)]",
        className
      )}
      {...props}
    >
      {/* Subtle top edge specular highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </div>
  );
}
