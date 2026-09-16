import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, Users, Compass } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "What This Means & Actionable Conclusion",
  description: "Key conclusions and citizen roadmap from Enerjanta's community clean energy survey.",
};

export default function ConclusionPage() {
  const roadmapSteps = [
    {
      phase: "Phase 1: Immediate",
      title: "Ward Energy Literacy & Bill Audits",
      desc: "Deploy volunteer student auditors to help 500+ households identify phantom electric loads and calculate roof solar viability.",
    },
    {
      phase: "Phase 2: Near-Term",
      title: "Collective Vendor Bulk-Purchasing",
      desc: "Aggregate 150+ rooftop commitments to negotiate 20% group discounts and extended 10-year workmanship warranties.",
    },
    {
      phase: "Phase 3: Structural",
      title: "Municipal Virtual Net-Metering Advocacy",
      desc: "Petition municipal electricity distribution companies for shared community solar subscriptions targeting apartment tenants.",
    },
  ];

  return (
    <Section spacing="lg">
      <Container size="narrow">
        <FadeInWhenVisible>
          <div className="space-y-6 text-center max-w-2xl mx-auto mb-16">
            <Badge variant="emerald">Strategic Takeaways</Badge>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
              What the Data Tells Us
            </h1>
            <p className="text-base sm:text-lg text-[#9496A1] leading-relaxed">
              Our 1,420+ household survey uncovers a definitive consensus: the bottleneck to clean
              energy is not citizen willingness, but institutional friction and initial financing.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="space-y-8">
          <Card className="border-emerald-500/30 bg-gradient-to-br from-[#121218] via-[#121218] to-emerald-950/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#FFFFF0] font-heading">
                  The Core Thesis: Citizen Power Beats Inertia
                </h2>
                <p className="text-sm sm:text-base text-[#E2E2EA] leading-relaxed">
                  When neighborhoods unite under collective purchasing, the capital barrier drops by
                  nearly a third. When local ward ambassadors provide neutral guidance, bureaucratic
                  distrust drops to zero.
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-[#FFFFF0] font-heading flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              Actionable 3-Stage Community Roadmap
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {roadmapSteps.map((step) => (
                <Card key={step.phase} className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
                      {step.phase}
                    </span>
                    <h3 className="text-base font-bold text-[#FFFFF0] font-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9496A1] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#14141E] border border-white/10 text-center space-y-6 mt-12">
            <h2 className="text-2xl font-bold text-[#FFFFF0] font-heading">
              Ready to Accelerate the Transition?
            </h2>
            <p className="text-sm text-[#9496A1] max-w-lg mx-auto">
              Join our growing network of ward ambassadors or review the complete granular survey findings.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/ambassadors"
                variant="primary"
                size="md"
                icon={<Users className="w-4 h-4" />}
                iconPosition="left"
              >
                Meet Ward Ambassadors
              </Button>
              <Button
                href="/survey-insights"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Re-examine Survey Charts
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
