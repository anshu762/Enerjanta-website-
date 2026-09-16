import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { InitiativeItem } from "@/types";
import { ArrowRight, Layers, Sun, Lightbulb, GraduationCap } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import Link from "next/link";

interface InitiativesPreviewProps {
  initiatives: InitiativeItem[];
}

export function InitiativesPreview({ initiatives }: InitiativesPreviewProps) {
  const getInitiativeIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sun className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <Section id="initiatives" spacing="lg" className="border-t border-white/[0.06] bg-[#0E0E14]/30">
      <Container>
        <FadeInWhenVisible>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <Badge variant="cyan">
              <span className="inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Action Programs
              </span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFF0] font-heading">
              Our Community Initiatives
            </h2>
            <p className="text-base text-[#9496A1]">
              Bridging the gap between raw survey data and transformative neighborhood infrastructure.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initiatives.map((init, idx) => (
            <StaggerItem key={init.id}>
              <Card className="h-full flex flex-col justify-between group hover:border-emerald-500/40">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getInitiativeIcon(idx)}
                  </div>

                  <h3 className="text-xl font-bold text-[#FFFFF0] font-heading group-hover:text-emerald-400 transition-colors">
                    {init.title}
                  </h3>

                  <p className="text-sm text-[#9496A1] leading-relaxed">
                    {init.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <Link
                    href={init.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
