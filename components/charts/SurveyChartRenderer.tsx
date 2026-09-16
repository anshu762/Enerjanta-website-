"use client";

import React, { useSyncExternalStore } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { SurveyChartDataItem } from "@/types";

interface SurveyChartRendererProps {
  data: SurveyChartDataItem[];
  chartType: string;
  sectionTitle: string;
  sectionSlug: string;
}

const PIE_COLORS = ["#10B981", "#06B6D4", "#F59E0B", "#8B5CF6", "#EC4899"];

const emptySubscribe = () => () => {};

interface CustomTooltipProps {
  payload?: Array<{ name: string; value: number; payload: { label: string; value: number } }>;
}

function CustomTooltip({ payload }: CustomTooltipProps) {
  if (payload && payload.length) {
    const item = payload[0];
    return (
      <div className="bg-[#121218] border border-white/15 px-3 py-2 rounded-lg shadow-xl text-xs">
        <span className="font-semibold text-[#FFFFF0]">{item.payload.label}: </span>
        <span className="font-bold text-emerald-400">{item.value}%</span>
      </div>
    );
  }
  return null;
}

export function SurveyChartRenderer({
  data,
  chartType,
  sectionTitle,
  sectionSlug,
}: SurveyChartRendererProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const tableId = `chart-table-${sectionSlug}`;

  // Pre-render placeholder while mounting on client to prevent layout shift
  if (!isMounted) {
    return (
      <div className="w-full h-72 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-xs text-[#9496A1]">
        Loading visualization...
      </div>
    );
  }

  return (
    <div className="w-full space-y-3">
      {/* Chart Canvas with aria description */}
      <div
        className="w-full h-72 sm:h-80 relative"
        role="region"
        aria-label={`${sectionTitle} data chart`}
        aria-describedby={tableId}
      >
        {chartType === "pie" ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={85}
                paddingAngle={4}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                    stroke="#0B0B0F"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : chartType === "area" ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id={`grad-${sectionSlug}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <XAxis
                dataKey="label"
                stroke="#9496A1"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#9496A1"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2.5}
                fillOpacity={1}
                fill={`url(#grad-${sectionSlug})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          /* Default: Bar chart */
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="label"
                stroke="#9496A1"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#9496A1"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Visually-hidden accessible data table for screen readers and search engines */}
      <div id={tableId} className="sr-only">
        <table>
          <caption>Statistical summary for {sectionTitle}</caption>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.label}</td>
                <td>{row.value}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accessible visual legend / summary beneath chart */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        {data.map((item, idx) => (
          <div key={item.id} className="flex items-center gap-1.5 text-xs text-[#9496A1]">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor:
                  chartType === "pie"
                    ? PIE_COLORS[idx % PIE_COLORS.length]
                    : "#10B981",
              }}
            />
            <span className="text-[#E2E2EA] font-medium">{item.label}:</span>
            <span className="text-emerald-400 font-bold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
