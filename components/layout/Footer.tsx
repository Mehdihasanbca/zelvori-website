import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { siteConfig } from '@/lib/site-config';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#060a12] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-slate-300 font-medium">
              “{siteConfig.tagline}”
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Zelvori is an international digital product development partner. We engineer high-performance web applications, mobile apps, e-commerce platforms, custom ERP/CRM business software, and intelligent workflow automation.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="text-[11px] text-slate-400 mt-1">
                Typical reply {siteConfig.contact.responseWindow.toLowerCase()}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Services
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Company
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/previews" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Interactive Previews
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors block py-0.5">
                  About Zelvori
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Solutions by Sector
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Delivery Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Start an Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Governance
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/payments" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Client Payment Info
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-cyan-400 transition-colors block py-0.5">
                  Trust & Security Standards
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors py-0.5"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <span className="text-slate-400">Custom Domain: zelvori.software</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Zelvori. All rights reserved. Ideas Into Digital Reality.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-slate-400 transition-colors"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
