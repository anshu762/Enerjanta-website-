"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Zap, ShieldCheck, SunMedium } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = ["Empowering", "Communities", "to", "Own", "Their", "Energy", "Future."];

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows (Subtle, GPU-cheap) */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[300px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Initiative Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <SunMedium className="w-4 h-4 text-emerald-400" />
              <span>Grassroots Clean Energy Initiative</span>
            </div>
          </div>

          {/* Staggered LCP Title on Mount (Zero delay if reduced motion) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFF0] font-heading leading-[1.08]">
            {shouldReduceMotion ? (
              titleWords.join(" ")
            ) : (
              <span className="inline-block">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.07,
                      ease: [0.21, 0.47, 0.32, 0.98] as const,
                    }}
                    className={`inline-block mr-2.5 sm:mr-3.5 ${
                      word === "Energy" || word === "Future."
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#9496A1] max-w-2xl mx-auto leading-relaxed font-normal">
            Enerjanta maps domestic energy demand across 28 municipal wards — unlocking
            rooftop solar, community microgrids, and lower bills through unbiased citizen data.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="#initiatives"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              Explore Our Initiatives
            </Button>
            <Button
              href="/ambassadors"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Meet Our Ambassadors
            </Button>
          </div>

          {/* Trust badges row */}
          <div className="pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-xs text-[#9496A1]">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>100% Citizen Funded</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Open Source Data</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <SunMedium className="w-4 h-4 text-amber-400" />
              <span>28 Wards Mobilized</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
