import React from "react";
import { getHomeData } from "@/lib/data";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { SurveyHighlights } from "@/components/home/SurveyHighlights";
import { InitiativesPreview } from "@/components/home/InitiativesPreview";
import { AmbassadorsBanner } from "@/components/home/AmbassadorsBanner";

export default async function HomePage() {
  const { stats, initiatives } = await getHomeData();

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section (LCP element, immediate render, no lazy-load delays) */}
      <Hero />

      {/* 2. Overview Section */}
      <Overview />

      {/* 3. Survey Highlights Teaser */}
      <SurveyHighlights stats={stats} />

      {/* 4. Initiatives Preview (#initiatives target for smooth-scroll) */}
      <InitiativesPreview initiatives={initiatives} />

      {/* 5. Ambassadors CTA Band */}
      <AmbassadorsBanner />
    </div>
  );
}
