import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Database, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Open Data",
  description: "Enerjanta privacy policies, survey participant anonymity, and open data commitment.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy & Open Data | Enerjanta",
    description: "Enerjanta privacy policies, survey participant anonymity, and open data commitment.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Section spacing="lg">
      <Container size="narrow">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Citizen Trust & Privacy
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFF0] font-heading">
            Privacy Policy & Open Data Commitment
          </h1>

          <p className="text-base text-[#9496A1] leading-relaxed">
            Enerjanta operates as an independent civic initiative. We prioritize absolute anonymity
            and rigorous data protection for every community respondent.
          </p>

          <div className="space-y-6 pt-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-[#FFFFF0] font-heading">
                    1. Respondent Anonymity
                  </h2>
                  <p className="text-sm text-[#9496A1] leading-relaxed">
                    All household survey answers are completely anonymized before entering statistical
                    aggregations. We do not sell, rent, or trade individual household data, electricity
                    consumer numbers, or billing history with commercial solar vendors.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-[#FFFFF0] font-heading">
                    2. Public Interest Open Data
                  </h2>
                  <p className="text-sm text-[#9496A1] leading-relaxed">
                    Aggregated neighborhood insights (ward-level solar feasibility, grid sentiment,
                    average expenditure) are published openly under Creative Commons Attribution 4.0
                    to assist municipal energy planners, researchers, and citizen welfare committees.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
