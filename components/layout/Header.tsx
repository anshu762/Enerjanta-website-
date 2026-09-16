"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Zap, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/survey-insights", label: "Survey Insights" },
  { href: "/ambassadors", label: "Ambassadors" },
  { href: "/conclusion", label: "Conclusion" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-[#0B0B0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-white/[0.04]"
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Brand Logo & Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-shadow">
                <div className="w-full h-full bg-[#0B0B0F] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-[#FFFFF0] group-hover:text-emerald-400 transition-colors">
                  Enerjanta
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-emerald-500/90 -mt-1">
                  Community Energy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-sm"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                      isActive
                        ? "bg-emerald-500/15 text-emerald-400 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                        : "text-[#E2E2EA] hover:text-[#FFFFF0] hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                href="/survey-insights"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                View Insights
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded-lg text-[#E2E2EA] hover:text-[#FFFFF0] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
