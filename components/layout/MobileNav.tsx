"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on ESC key and trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Auto focus drawer container
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-xs h-full bg-[#0E0E14] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl focus:outline-none"
      >
        <div>
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2 group focus-visible:outline-none"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-base">
                E
              </span>
              <span className="font-heading text-lg font-bold text-[#FFFFF0] tracking-tight">
                Enerjanta
              </span>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-lg text-[#9496A1] hover:text-[#FFFFF0] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
                      : "text-[#E2E2EA] hover:text-[#FFFFF0] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Community Energy
            </div>
            <p className="text-xs text-[#9496A1] leading-relaxed">
              Empowering 28 municipal wards to transition to solar and renewable microgrids.
            </p>
          </div>

          <Button
            href="/survey-insights"
            variant="primary"
            size="md"
            className="w-full justify-between"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Survey
          </Button>
        </div>
      </div>
    </div>
  );
}
