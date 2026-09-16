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

interface AmbassadorsListProps {
  initialAmbassadors: AmbassadorItem[];
}

export function AmbassadorsList({ initialAmbassadors }: AmbassadorsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const areas = useMemo(() => {
    const unique = new Set<string>();
    initialAmbassadors.forEach((a) => {
      if (a.area) unique.add(a.area);
    });
    return ["all", ...Array.from(unique)];
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
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#121218] border border-white/[0.08]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9496A1]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, role, or neighborhood..."
            aria-label="Search ambassadors"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] placeholder-[#606170] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Area Filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="area-filter" className="sr-only">
            Filter by area
          </label>
          <select
            id="area-filter"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#0B0B0F] border border-white/10 text-sm text-[#FFFFF0] focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            {areas.map((area) => (
              <option key={area} value={area} className="bg-[#0B0B0F] text-[#FFFFF0]">
                {area === "all" ? "All Municipal Areas" : area}
              </option>
            ))}
          </select>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            icon={<UserPlus className="w-4 h-4" />}
            iconPosition="left"
          >
            Join Network
          </Button>
        </div>
      </div>

      {/* Grid of Ambassadors */}
      {filteredAmbassadors.length === 0 ? (
        <div className="text-center py-16 bg-[#121218] rounded-xl border border-white/[0.06]">
          <p className="text-base text-[#9496A1]">No ambassadors match your search criteria.</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 text-emerald-400"
            onClick={() => {
              setSearchTerm("");
              setSelectedArea("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmbassadors.map((amb) => (
            <StaggerItem key={amb.id}>
              <Card className="h-full flex flex-col justify-between group hover:border-emerald-500/40">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
                      <Image
                        src={amb.photoUrl}
                        alt={`Portrait photograph of ${amb.name}`}
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
                          <MapPin className="w-3 h-3 text-emerald-400/80" />
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

      {/* Ambassador Application Modal */}
      <AmbassadorApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
