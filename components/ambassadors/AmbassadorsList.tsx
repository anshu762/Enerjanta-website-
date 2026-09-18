"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { AmbassadorItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AmbassadorApplyModal } from "./AmbassadorApplyModal";
import { Search, MapPin, UserPlus } from "lucide-react";
import { TwitterIcon, LinkedinIcon } from "@/components/ui/Icons";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { cn } from "@/lib/utils";

interface AmbassadorsListProps {
  initialAmbassadors: AmbassadorItem[];
}

export function AmbassadorsList({ initialAmbassadors }: AmbassadorsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique areas with counts
  const areas = useMemo(() => {
    const counts: Record<string, number> = {};
    initialAmbassadors.forEach((a) => {
      if (a.area) {
        counts[a.area] = (counts[a.area] || 0) + 1;
      }
    });
    return [
      { id: "all", label: "All Areas", count: initialAmbassadors.length },
      ...Object.entries(counts).map(([area, count]) => ({
        id: area,
        label: area,
        count,
      })),
    ];
  }, [initialAmbassadors]);

  const filteredAmbassadors = useMemo(() => {
    return initialAmbassadors.filter((amb) => {
      const matchesSearch =
        amb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        amb.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (amb.area && amb.area.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesArea = selectedArea === "all" || amb.area === selectedArea;

      return matchesSearch && matchesArea;
    });
  }, [initialAmbassadors, searchTerm, selectedArea]);

  return (
    <div className="space-y-8">
      {/* Controls & Filtering Bar */}
      <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/[0.08] shadow-lg">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9496A1]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, role, or neighborhood area..."
              aria-label="Search ambassadors"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
            />
          </div>

          {/* Quick Apply Action */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsModalOpen(true)}
              icon={<UserPlus className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto shrink-0"
            >
              Join as Ambassador
            </Button>
          </div>
        </div>

        {/* Area Pill-Tabs (Desktop/Tablet) and Dropdown (Mobile) */}
        <div className="pt-2 border-t border-white/[0.06]">
          {/* Mobile Dropdown */}
          <div className="sm:hidden flex items-center gap-2">
            <label htmlFor="mobile-area-select" className="text-xs text-[#9496A1] shrink-0 font-medium">
              Filter Area:
            </label>
            <select
              id="mobile-area-select"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#0B0B0F] border border-white/10 text-xs text-[#FFFFF0] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {areas.map((area) => (
                <option key={area.id} value={area.id} className="bg-[#0B0B0F] text-[#FFFFF0]">
                  {area.label} ({area.count})
                </option>
              ))}
            </select>
          </div>

          {/* Desktop / Tablet Pill-Tabs */}
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#9496A1] mr-1 font-medium">Filter by Area:</span>
            {areas.map((area) => {
              const isActive = selectedArea === area.id;
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                    isActive
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      : "bg-[#0B0B0F] text-[#9496A1] border border-white/10 hover:text-[#FFFFF0] hover:border-white/20"
                  )}
                >
                  <span>{area.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full",
                      isActive
                        ? "bg-emerald-500/30 text-emerald-300"
                        : "bg-white/5 text-[#8F90A0]"
                    )}
                  >
                    {area.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of Ambassadors (1 col mobile, 2 tablet, 3-4 desktop) */}
      {filteredAmbassadors.length === 0 ? (
        <div className="text-center py-16 bg-[#121218] rounded-2xl border border-white/[0.06]">
          <p className="text-base text-[#9496A1]">No ambassadors match your search criteria.</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 text-emerald-400 hover:text-emerald-300"
            onClick={() => {
              setSearchTerm("");
              setSelectedArea("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmbassadors.map((amb) => (
            <StaggerItem key={amb.id}>
              <Card
                tabIndex={0}
                aria-label={`Ambassador profile for ${amb.name}, ${amb.role}`}
                className="h-full flex flex-col justify-between group hover:border-emerald-500/40 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
                      <Image
                        src={amb.photoUrl}
                        alt={`${amb.name}, ${amb.role}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#FFFFF0] font-heading leading-tight group-hover:text-emerald-400 transition-colors">
                        {amb.name}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium line-clamp-1">
                        {amb.role}
                      </p>
                      {amb.area && (
                        <div className="flex items-center gap-1 text-[11px] text-[#9496A1]">
                          <MapPin className="w-3 h-3 text-emerald-400/80 shrink-0" />
                          <span>{amb.area}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-[#9496A1] leading-relaxed line-clamp-4 pt-1">
                    {amb.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Badge variant="muted">Ward Champion</Badge>

                  <div className="flex items-center gap-2">
                    {amb.socialLinks?.twitter && (
                      <a
                        href={amb.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${amb.name} on Twitter`}
                        className="p-1.5 rounded-md text-[#9496A1] hover:text-emerald-400 hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TwitterIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {amb.socialLinks?.linkedin && (
                      <a
                        href={amb.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${amb.name} on LinkedIn`}
                        className="p-1.5 rounded-md text-[#9496A1] hover:text-emerald-400 hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}

      {/* Ambassador Nomination Modal */}
      <AmbassadorApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
