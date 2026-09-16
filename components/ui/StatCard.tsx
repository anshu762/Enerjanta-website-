"use client";

import React from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  suffix?: string | null;
  label: string;
  description?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function StatCard({
  value,
  suffix,
  label,
  description,
  className,
  icon,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col justify-between border-white/[0.08] hover:border-emerald-500/40 group",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
          Survey Metric
        </span>
        {icon && (
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
      </div>

      <div className="my-2">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
            {value}
          </span>
          {suffix && (
            <span className="text-2xl sm:text-3xl font-semibold text-emerald-400">
              {suffix}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium text-[#E2E2EA] leading-snug">
          {label}
        </p>
      </div>

      {description && (
        <p className="mt-3 pt-3 text-xs text-[#9496A1] border-t border-white/[0.06] leading-relaxed">
          {description}
        </p>
      )}
    </Card>
  );
}
