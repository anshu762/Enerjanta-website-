import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/conclusion/ContactForm";
import { CheckCircle2, Users, ArrowDown, Compass, Lightbulb, Zap, ShieldCheck } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Conclusion & What Our Results Showcase | Enerjanta",
  description:
    "Empirical synthesis, community clean energy roadmap, and direct citizen action form for the Enerjanta initiative.",
  alternates: {
    canonical: "/conclusion",
  },
  openGraph: {
    title: "Conclusion & Strategic Roadmap | Enerjanta",
    description:
      "What 1,420+ household survey responses tell us about decentralized community solar, microgrids, and the next steps forward.",
    url: "/conclusion",
  },
};

export default function ConclusionPage() {
  // 5 synthesized bullet takeaways from empirical SurveyFinding research data
  const keyTakeaways = [
    {
      title: "Strong Appetite for Clean Solar",
      text: "84% of surveyed households actively want to switch to rooftop solar or renewable grid tariffs, disproving the myth of citizen apathy toward green energy.",
    },
    {
      title: "Financing & Initial Capex Are Key Obstacles",
      text: "68% cited capital costs as their primary friction point, but 79% would adopt micro-installations immediately under group-buying or pay-as-you-save schemes.",
    },
    {
      title: "Grid Flaws Drive Urgency for Microgrids",
      text: "Summer peak-load blackouts and voltage swings have pushed 62% of residential blocks to demand decentralized battery-backed hybrid solar microgrids.",
    },
    {
      title: "Renters & Apartments Demand Equal Access",
      text: "Over 88% of urban apartment residents lack private rooftop rights but strongly support community-owned shared solar subscriptions within a 5km radius.",
    },
    {
      title: "Local Ambassadors Multiply Engagement by 3.4x",
      text: "Wards championed by active resident energy volunteers recorded 3.4x higher rates of home energy audits and municipal petition participation.",
    },
  ];

  // 3-Stage Community Action Roadmap
  const nextSteps = [
    {
      phase: "Phase 1 · Immediate",
      title: "Ward Energy Literacy Kiosks",
      desc: "Deploy trained volunteer student auditors to conduct free home energy diagnostics across 500+ households to eliminate phantom peak-hour waste.",
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />,
    },
    {
      phase: "Phase 2 · Mid-Term",
      title: "Collective Bulk-Purchasing Groups",
      desc: "Aggregate 150+ rooftop commitments per district to negotiate 20–25% bulk hardware discounts and 10-year workmanship warranties.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
    },
    {
      phase: "Phase 3 · Structural Policy",
      title: "Virtual Net-Metering Advocacy",
      desc: "Petition regional electricity distribution companies (DISCOMs) to introduce municipal virtual net-metering regulations for apartment dwellers.",
      icon: <Compass className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Header Section */}
      <Section spacing="lg" className="border-b border-white/[0.06] bg-gradient-to-b from-[#121218]/60 to-transparent">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex justify-center">
                <Badge variant="emerald">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Empirical Synthesis
                  </span>
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFF0] font-heading">
                What Our Results Showcase
              </h1>

              <p className="text-base sm:text-xl text-[#9496A1] max-w-2xl mx-auto leading-relaxed">
                The evidence is decisive: the bottleneck to community clean energy is not citizen
                willingness, but fragmented financing and bureaucratic information silos.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="#get-involved-form"
                  variant="primary"
                  size="lg"
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  Get Involved
                </Button>
                <Button
                  href="/ambassadors"
                  variant="secondary"
                  size="lg"
                  icon={<Users className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Meet Our Ambassadors
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* 2. Summary of Insights Section */}
      <Section spacing="lg">
        <Container size="narrow">
          <FadeInWhenVisible>
            <div className="space-y-3 mb-10 text-center sm:text-left">
              <Badge variant="cyan">Strategic Takeaways</Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFF0] font-heading">
                Summary of Survey Findings
              </h2>
              <p className="text-sm sm:text-base text-[#9496A1]">
                Core statistical truths gathered across 1,420+ households across 28 municipal wards.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="space-y-4">
            {keyTakeaways.map((item, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.05}>
                <Card className="hover:border-emerald-500/40 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#FFFFF0] font-heading">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Next Steps: What Enerjanta Will Do Next */}
      <Section spacing="lg" className="border-t border-white/[0.06] bg-[#0E0E14]/40">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
              <Badge variant="amber">The Action Plan</Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFF0] font-heading">
                What Enerjanta Will Do Next
              </h2>
              <p className="text-sm sm:text-base text-[#9496A1]">
                Transforming open survey research into tangible neighborhood power installations.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((step) => (
              <StaggerItem key={step.phase}>
                <Card className="h-full flex flex-col justify-between hover:border-emerald-500/40">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {step.icon}
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 block">
                        {step.phase}
                      </span>
                      <h3 className="text-lg font-bold text-[#FFFFF0] font-heading mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* 4. Get Involved Contact Form Flow */}
      <Section spacing="lg" className="border-t border-white/[0.06]">
        <Container size="narrow">
          <FadeInWhenVisible>
            <ContactForm />
          </FadeInWhenVisible>
        </Container>
      </Section>
    </div>
  );
}
