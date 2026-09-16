import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ZapOff } from "lucide-react";

export default function NotFound() {
  return (
    <Section spacing="lg" className="my-auto text-center">
      <Container size="narrow">
        <div className="space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-emerald-400">
            <ZapOff className="w-8 h-8" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FFFFF0] font-heading">
            404 — Grid Node Not Found
          </h1>

          <p className="text-base text-[#9496A1] max-w-md mx-auto leading-relaxed">
            The page you are looking for has been disconnected or moved. Let&apos;s reroute you back to
            the main network.
          </p>

          <div className="pt-2">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
