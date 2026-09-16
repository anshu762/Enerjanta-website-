import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getAmbassadors } from "@/lib/data";
import { AmbassadorsList } from "@/components/ambassadors/AmbassadorsList";
import { Users } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "Ward Ambassadors & Grassroots Leaders",
  description: "Meet the local citizens, researchers, and engineers driving clean energy adoption across 28 municipal wards.",
};

export default async function AmbassadorsPage() {
  const ambassadors = await getAmbassadors();

  return (
    <Section spacing="lg">
      <Container>
        <FadeInWhenVisible>
          <div className="space-y-4 max-w-2xl mx-auto text-center mb-12">
            <Badge variant="emerald">
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                Grassroots Leadership
              </span>
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
              Our Ward Ambassadors
            </h1>

            <p className="text-base sm:text-lg text-[#9496A1] leading-relaxed">
              Real citizens championing rooftop microgrids, organizing neighbor-to-neighbor energy
              audits, and breaking through bureaucratic bottlenecks at the street level.
            </p>
          </div>
        </FadeInWhenVisible>

        <AmbassadorsList initialAmbassadors={ambassadors} />
      </Container>
    </Section>
  );
}
