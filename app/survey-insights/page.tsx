import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BarChart3, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Survey Insights Placeholder",
  description: "Phase 1 placeholder for Enerjanta Survey Insights.",
};

export default function SurveyInsightsPlaceholderPage() {
  return (
    <Section spacing="lg">
      <Container size="narrow">
        <Card className="text-center py-12 space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
            <BarChart3 className="w-7 h-7" />
          </div>

          <Badge variant="emerald">Phase 1 Architecture Complete</Badge>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFF0] font-heading">
            Survey Insights Dashboard
          </h1>

          <p className="text-base text-[#9496A1] max-w-md mx-auto leading-relaxed">
            Data models, Recharts visualizations, and Prisma queries are prepared and will be activated
            in the upcoming phase.
          </p>

          <div className="pt-2">
            <Button href="/" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              Back to Overview
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
