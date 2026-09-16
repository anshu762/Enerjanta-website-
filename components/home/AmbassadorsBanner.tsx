import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Users, ArrowRight, ShieldCheck } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export function AmbassadorsBanner() {
  return (
    <Section spacing="lg" className="border-t border-white/[0.06] bg-gradient-to-b from-[#121218] to-[#0B0B0F] relative overflow-hidden">
      {/* Decorative subtle ambient circle */}
      <div
        className="pointer-events-none absolute -bottom-24 right-10 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <Container>
        <FadeInWhenVisible>
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-[#14141E] border border-white/10 shadow-2xl overflow-hidden">
            {/* Specular line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            <div className="max-w-3xl space-y-6">
              <Badge variant="emerald">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Community Movement
                </span>
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading leading-tight">
                Change Happens Ward by Ward, Neighbor to Neighbor.
              </h2>

              <p className="text-base sm:text-lg text-[#9496A1] leading-relaxed">
                Meet the resident volunteers, electrical engineers, and local policy researchers
                who volunteer their time to guide households through rooftop solar sizing, net
                metering subsidies, and neighborhood energy cooperatives.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="/ambassadors"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Check Our Ambassadors
                </Button>

                <div className="flex items-center gap-2 text-xs text-[#9496A1] px-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>28 wards actively represented</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </Section>
  );
}
