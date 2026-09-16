import React from "react";
import Link from "next/link";
import { Zap, Mail, ArrowUpRight, Heart } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0E0E14] border-t border-white/[0.08] mt-auto">
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-heading text-lg font-bold text-[#FFFFF0] tracking-tight">
                Enerjanta
              </span>
            </Link>
            <p className="text-sm text-[#9496A1] max-w-md leading-relaxed">
              A grassroots citizen clean energy initiative empowering municipal wards with
              independent survey data, neighborhood solar collectives, and local energy literacy.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#9496A1]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enerjanta on Twitter"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enerjanta open data on GitHub"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enerjanta on LinkedIn"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#FFFFF0] font-heading">
              Exploration
            </h2>
            <ul className="space-y-2 text-sm text-[#9496A1]">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Home Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/survey-insights"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Survey Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/ambassadors"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Ward Ambassadors
                </Link>
              </li>
              <li>
                <Link
                  href="/conclusion"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Actionable Conclusion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Initiative Column */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#FFFFF0] font-heading">
              Get Involved
            </h2>
            <p className="text-xs text-[#9496A1] leading-relaxed">
              Have questions about survey data or want to bring a clean energy audit to your ward?
            </p>
            <a
              href="mailto:contact@enerjanta.org"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded p-1"
            >
              <Mail className="w-4 h-4" />
              <span>contact@enerjanta.org</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="pt-2">
              <Link
                href="/privacy"
                className="text-xs text-[#9496A1] hover:text-[#FFFFF0] underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
              >
                Privacy Policy & Open Data Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9496A1]">
          <p>© {currentYear} Enerjanta Citizen Initiative. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-emerald-400 inline fill-emerald-400" /> for community energy resilience.
          </p>
        </div>
      </Container>
    </footer>
  );
}
