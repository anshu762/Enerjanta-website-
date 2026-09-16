import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Zap, Sun, ShieldCheck, ArrowRight, BarChart2, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Showcase */}
      <Section spacing="lg" className="relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <Badge variant="emerald">
                <span className="inline-flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5" />
                  Phase 1 · Design System & Layout Shell
                </span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFF0] font-heading leading-tight">
              Enerjanta — Community Clean Energy Platform
            </h1>

            <p className="text-base sm:text-lg text-[#9496A1] max-w-2xl mx-auto leading-relaxed">
              Decentralizing clean energy across 28 municipal wards through open citizen survey data,
              rooftop solar collectives, and local energy literacy.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                href="/survey-insights"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Survey Insights
              </Button>
              <Button
                href="/ambassadors"
                variant="secondary"
                size="lg"
                icon={<Users className="w-4 h-4" />}
                iconPosition="left"
              >
                Meet Ambassadors
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stat Cards Grid Showcase */}
      <Section spacing="md" className="border-t border-white/[0.06] bg-[#0E0E14]/40">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-xl mx-auto text-center space-y-3 mb-10">
              <Badge variant="cyan">Metric Components</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFF0] font-heading">
                Survey StatCard Primitives
              </h2>
              <p className="text-sm text-[#9496A1]">
                High-contrast numeric display with 8px rhythm and emerald accents.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <StatCard
                value="1,420"
                suffix="+"
                label="Households Surveyed"
                icon={<BarChart2 className="w-4 h-4" />}
              />
            </StaggerItem>
            <StaggerItem>
              <StatCard
                value="84"
                suffix="%"
                label="Solar Transition Demand"
                icon={<Sun className="w-4 h-4" />}
              />
            </StaggerItem>
            <StaggerItem>
              <StatCard
                value="38"
                suffix="%"
                label="Avg Monthly Bill Savings"
                icon={<Zap className="w-4 h-4" />}
              />
            </StaggerItem>
            <StaggerItem>
              <StatCard
                value="28"
                suffix=" Wards"
                label="Municipal Wards Engaged"
                icon={<ShieldCheck className="w-4 h-4" />}
              />
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Cards & Buttons Showcase */}
      <Section spacing="lg" className="border-t border-white/[0.06]">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-xl mx-auto text-center space-y-3 mb-12">
              <Badge variant="amber">UI Primitives</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFF0] font-heading">
                Interactive Card & Button States
              </h2>
              <p className="text-sm text-[#9496A1]">
                Hover lift, soft border glow, specular highlight, and visible focus rings.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="space-y-4">
                <Badge variant="emerald">Primary</Badge>
                <h3 className="text-xl font-bold text-[#FFFFF0] font-heading">
                  Community Solar Collective
                </h3>
                <p className="text-sm text-[#9496A1] leading-relaxed">
                  Pooling rooftop footprints and purchasing power to negotiate 25% lower equipment rates.
                </p>
                <div className="pt-2">
                  <Button href="/survey-insights" variant="primary" size="sm">
                    Explore Initiative
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <Badge variant="cyan">Secondary</Badge>
                <h3 className="text-xl font-bold text-[#FFFFF0] font-heading">
                  Ward Energy Kiosks
                </h3>
                <p className="text-sm text-[#9496A1] leading-relaxed">
                  Physical and digital drop-in points providing free home energy audits and net-metering guidance.
                </p>
                <div className="pt-2">
                  <Button href="/survey-insights" variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <Badge variant="amber">Ghost Variant</Badge>
                <h3 className="text-xl font-bold text-[#FFFFF0] font-heading">
                  Ward Ambassadors
                </h3>
                <p className="text-sm text-[#9496A1] leading-relaxed">
                  Empowering citizen volunteers and electrical engineers to coordinate local clean energy audits.
                </p>
                <div className="pt-2">
                  <Button href="/ambassadors" variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Meet Team
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
