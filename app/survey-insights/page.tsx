import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getSurveyData } from "@/lib/data";
import { SurveyChartRenderer } from "@/components/charts/SurveyChartRenderer";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { BarChart3, CheckCircle, Info, ArrowRight, Users, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Survey Insights & Community Energy Data",
  description:
    "Comprehensive findings from 1,420+ households across 28 municipal wards analyzing clean energy adoption, costs, and barriers.",
  alternates: {
    canonical: "/survey-insights",
  },
  openGraph: {
    title: "Survey Insights & Community Energy Data | Enerjanta",
    description:
      "Comprehensive empirical findings from 1,420+ households across 28 municipal wards analyzing clean energy adoption, costs, and barriers.",
    url: "/survey-insights",
  },
};

export default async function SurveyInsightsPage() {
  const { findings, sections } = await getSurveyData();

  return (
    <div className="w-full">
      {/* 1. Header Section */}
      <Section spacing="md" className="border-b border-white/[0.06] bg-gradient-to-b from-[#121218]/50 to-transparent">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge variant="emerald">
                <span className="inline-flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Independent Field Survey
                </span>
              </Badge>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
                Survey Insights
              </h1>

              <p className="text-base sm:text-lg text-[#9496A1] leading-relaxed">
                Empirical evidence gathered across 1,420+ residential and commercial households in
                28 municipal wards between June and August 2026.
              </p>

              {/* Methodology Pill Summary */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#E2E2EA]">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Sample: <strong className="text-emerald-400">1,420 Households</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Coverage: <strong className="text-emerald-400">28 Municipal Wards</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Confidence Level: <strong className="text-emerald-400">95% (±2.6% CI)</strong>
                </span>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* 2. Key Findings Section */}
      <Section spacing="md">
        <Container>
          <FadeInWhenVisible>
            <div className="space-y-3 mb-10 text-center sm:text-left">
              <Badge variant="cyan">Executive Summary</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFF0] font-heading">
                5 Critical Takeaways
              </h2>
              <p className="text-sm text-[#9496A1] max-w-xl">
                The most statistically significant discoveries identified through citizen response analysis.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {findings.map((item, idx) => (
              <StaggerItem key={item.id}>
                <Card className="h-full flex flex-col justify-between border-white/[0.08] hover:border-cyan-500/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        Finding 0{idx + 1}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400/70" />
                    </div>
                    <h3 className="text-base font-bold text-[#FFFFF0] font-heading leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* 3. Detailed Results Section with Interactive Recharts */}
      <Section spacing="md" className="bg-[#0E0E14]/40 border-y border-white/[0.04]">
        <Container>
          <FadeInWhenVisible>
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
              <Badge variant="amber">Thematic Breakdowns</Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FFFFF0] font-heading">
                Detailed Sector Results
              </h2>
              <p className="text-sm sm:text-base text-[#9496A1]">
                Interactive exploration across perception, priorities, barriers, and policy remedies.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="space-y-16">
            {sections.map((sec, secIdx) => (
              <FadeInWhenVisible key={sec.id} delay={0.1}>
                <div
                  id={sec.slug}
                  className="p-6 sm:p-10 rounded-2xl bg-[#121218] border border-white/[0.08] shadow-xl space-y-8 scroll-mt-24"
                >
                  <div className="space-y-2 border-b border-white/[0.06] pb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                        Theme 0{secIdx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFF0] font-heading">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-[#9496A1] leading-relaxed max-w-3xl">
                      {sec.intro}
                    </p>
                  </div>

                  {/* Two-column layout: Bullets on left, Chart on right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Key Observations Bullets */}
                    <div className="lg:col-span-6 space-y-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E2E2EA]">
                        Reported Observations
                      </h4>
                      <ul className="space-y-3">
                        {sec.points.map((pt) => (
                          <li key={pt.id} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#9496A1] leading-relaxed">
                              {pt.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Chart Visualization */}
                    <div className="lg:col-span-6 p-4 rounded-xl bg-[#0B0B0F]/60 border border-white/[0.06]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-center text-[#E2E2EA] mb-2">
                        {sec.title} Visualization
                      </h4>
                      <SurveyChartRenderer
                        data={sec.chartData}
                        chartType={sec.chartData[0]?.chartType || "bar"}
                        sectionTitle={sec.title}
                        sectionSlug={sec.slug}
                      />
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Methodology & Disclaimer */}
      <Section spacing="md">
        <Container size="narrow">
          <Card className="bg-[#14141E] border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-white/5 text-[#9496A1] shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#FFFFF0] font-heading">
                  Methodology & Research Integrity
                </h3>
                <p className="text-xs text-[#9496A1] leading-relaxed">
                  Surveys were administered through verified ward volunteers using stratified random
                  sampling. Electricity tariff figures reflect standardized regional distribution
                  slabs. All findings are independently compiled without corporate sponsorship.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 5. Next Step CTAs */}
      <Section spacing="md" className="border-t border-white/[0.06]">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFF0] font-heading">
              Ready to See How We Turn Data Into Action?
            </h2>
            <p className="text-sm text-[#9496A1] max-w-lg mx-auto leading-relaxed">
              Explore the strategic conclusions or connect directly with the ward ambassadors
              championing these changes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                href="/conclusion"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                See What This Means
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
        </Container>
      </Section>
    </div>
  );
}
