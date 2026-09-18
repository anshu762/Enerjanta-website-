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
  const isLongSuffix = suffix && suffix.trim().length > 2;

  return (
    <Card
      className={cn(
        "h-full flex flex-col justify-between border-white/[0.08] hover:border-emerald-500/40 group transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col">
        {/* Top Header: Badge + Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
            Survey Metric
          </span>
          {icon && (
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shrink-0">
              {icon}
            </div>
          )}
        </div>

        {/* Metric Value & Suffix */}
        <div className="flex items-baseline gap-1.5 min-h-[3.25rem]">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
            {value}
          </span>
          {suffix && (
            <span
              className={cn(
                "font-semibold text-emerald-400",
                isLongSuffix ? "text-xl sm:text-2xl font-medium" : "text-2xl sm:text-3xl"
              )}
            >
              {suffix}
            </span>
          )}
        </div>
      </div>

      {/* Label and Description with consistent dividing border */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col flex-1 justify-between">
        <p className="text-sm sm:text-base font-medium text-[#E2E2EA] leading-snug min-h-[2.5rem] flex items-center">
          {label}
        </p>

        {description && (
          <p className="mt-2 pt-2 text-xs text-[#9496A1] border-t border-white/[0.04] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}
