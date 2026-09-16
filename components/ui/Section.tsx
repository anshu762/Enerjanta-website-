import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "none";
}

export function Section({
  children,
  className,
  id,
  spacing = "md",
  ...props
}: SectionProps) {
  const spacings = {
    none: "",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn("relative w-full scroll-mt-20", spacings[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}
