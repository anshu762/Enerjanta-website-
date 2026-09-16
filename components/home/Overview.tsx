import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Sparkles, Target, Compass } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function Overview() {
  const highlights = [
    "Independent verification of rooftop solar feasibility across 28 municipal wards.",
    "Eliminating commercial middleman markups through direct community group-buying.",
    "Training local polytechnic youth in inverter diagnostics and microgrid maintenance.",
    "Advocating for virtual net-metering legislation for tenants and multi-story apartments.",
  ];

  return (
    <Section spacing="lg" className="border-t border-white/[0.06] bg-[#0E0E14]/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <FadeInWhenVisible>
              <Badge variant="emerald">
                <span className="inline-flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  Our Civic Mission
                </span>
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFF0] font-heading mt-3">
                Decentralizing Clean Energy from the Bottom Up
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <div className="space-y-4 text-base text-[#9496A1] leading-relaxed">
                <p>
                  The modern power grid was engineered a century ago for centralized fossil fuels.
                  Today, soaring consumer tariffs, summer blackouts, and opaque bureaucratic
                  approvals stall the transition to clean, self-generated rooftop electricity.
                </p>
                <p>
                  Enerjanta exists to flip the dynamic. We believe electricity is not merely a utility
                  bill, but a community asset. By conducting independent door-to-door audits and
                  uncovering real neighborhood sentiments, we empower residents to negotiate as a unified
                  coalition.
                </p>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="pt-2 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E2E2EA] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Core Strategic Pillars
                </h3>
                <ul className="space-y-2.5">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-[#E2E2EA] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right Column: Mission Card Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <FadeInWhenVisible delay={0.2}>
              <Card className="bg-gradient-to-br from-[#121218] to-emerald-950/20 border-emerald-500/25 p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#FFFFF0] font-heading">
                    The 2026 People’s Energy Blueprint
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
                    By aggregating 1,420+ household survey points into open public data, we are
                    putting transparent bargaining power back into the hands of citizens, ward
                    councils, and resident welfare associations.
                  </p>
                  <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#E2E2EA]">
                    <span>Civic Transparency</span>
                    <span className="text-emerald-400 font-semibold">100% Non-Profit</span>
                  </div>
                </div>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </Container>
    </Section>
  );
}
