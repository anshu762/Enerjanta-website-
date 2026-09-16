import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SurveyStatItem } from "@/types";
import { ArrowRight, BarChart2, Home, TrendingUp, Users2, Zap } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface SurveyHighlightsProps {
  stats: SurveyStatItem[];
}

export function SurveyHighlights({ stats }: SurveyHighlightsProps) {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Home className="w-4 h-4" />;
      case 1:
        return <TrendingUp className="w-4 h-4" />;
      case 2:
        return <Zap className="w-4 h-4" />;
      default:
        return <Users2 className="w-4 h-4" />;
    }
  };

  return (
    <Section spacing="lg" className="border-t border-white/[0.06]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeInWhenVisible>
            <div className="space-y-3">
              <Badge variant="emerald">
                <span className="inline-flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  Grassroots Findings
                </span>
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFF0] font-heading">
                Survey Highlights
              </h2>
              <p className="text-base text-[#9496A1] max-w-xl">
                Direct metrics distilled from comprehensive citizen audits across 28 municipal wards.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <Button
              href="/survey-insights"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Survey Insights
            </Button>
          </FadeInWhenVisible>
        </div>

        {/* 4 Stat Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StaggerItem key={stat.id}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={getIcon(idx)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
