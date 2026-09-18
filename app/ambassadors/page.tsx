import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAmbassadors } from "@/lib/data";
import { AmbassadorsList } from "@/components/ambassadors/AmbassadorsList";
import { Users, Mail, ArrowUpRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "Our Ambassadors | Enerjanta Community Clean Energy",
  description:
    "Meet our community ambassadors — local citizens, researchers, and engineers driving clean energy adoption across 28 municipal wards.",
  alternates: {
    canonical: "/ambassadors",
  },
  openGraph: {
    title: "Our Ambassadors | Enerjanta Community Clean Energy",
    description:
      "Meet our community ambassadors — local citizens, researchers, and engineers driving clean energy adoption across 28 municipal wards.",
    url: "/ambassadors",
  },
};

export default async function AmbassadorsPage() {
  const ambassadors = await getAmbassadors();

  return (
    <div className="w-full flex flex-col">
      {/* 1. Header Section */}
      <Section spacing="lg" className="border-b border-white/[0.06] bg-gradient-to-b from-[#121218]/60 to-transparent">
        <Container>
          <FadeInWhenVisible>
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <div className="flex justify-center">
                <Badge variant="emerald">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    Grassroots Leadership Network
                  </span>
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFF0] font-heading">
                Our Ambassadors
              </h1>

              <p className="text-base sm:text-xl text-[#9496A1] max-w-2xl mx-auto leading-relaxed">
                Local citizens, renewable energy researchers, and grassroots organizers championing
                rooftop solar microgrids and bill transparency across 28 municipal wards.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-[#9496A1]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Ward Representatives</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>100% Volunteer Driven</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </Container>
      </Section>

      {/* 2. Ambassador Grid Section */}
      <Section spacing="lg">
        <Container>
          <AmbassadorsList initialAmbassadors={ambassadors} />
        </Container>
      </Section>

      {/* 3. Become an Ambassador CTA Section */}
      <Section spacing="lg" className="border-t border-white/[0.06] bg-[#0E0E14]/50 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/10 blur-[130px] rounded-full"
          aria-hidden="true"
        />

        <Container size="narrow">
          <FadeInWhenVisible>
            <Card className="bg-[#14141E] border-white/10 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <Mail className="w-7 h-7" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <Badge variant="emerald">Join The Movement</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFF0] font-heading">
                  Become an Ambassador
                </h2>
                <p className="text-sm text-[#9496A1] leading-relaxed">
                  Want to champion clean energy in your neighborhood, organize rooftop mapping audits,
                  or bring community solar workshops to your local ward? We would love to have you on board.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="mailto:hello@enerjanta.org?subject=Becoming%20an%20Enerjanta%20Ambassador"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>

              <p className="text-xs text-[#9496A1] pt-2">
                Have questions or direct suggestions? Reach our community desk at{" "}
                <a
                  href="mailto:hello@enerjanta.org"
                  className="text-emerald-400 hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  hello@enerjanta.org
                </a>
              </p>
            </Card>
          </FadeInWhenVisible>
        </Container>
      </Section>
    </div>
  );
}
