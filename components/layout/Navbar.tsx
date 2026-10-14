'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { siteConfig } from '@/lib/site-config';
import { Menu, X, ChevronDown, ArrowRight, Mail } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dismiss menus on Escape key and return focus gracefully to opener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
          servicesButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [servicesDropdownOpen, mobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'liquid-glass-dock border-white/10 shadow-2xl shadow-black/80'
          : 'bg-[#070b14]/75 backdrop-blur-xl border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Monogram */}
        <div className="shrink-0">
          <BrandLogo size="md" />
        </div>

        {/* Zone 2: 4-5 Concise Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-sm font-medium text-slate-300">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setServicesDropdownOpen(false);
              }
            }}
          >
            <button
              ref={servicesButtonRef}
              id="services-menu-button"
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                pathname.startsWith('/services') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-controls="services-menu-dropdown"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div
                id="services-menu-dropdown"
                aria-labelledby="services-menu-button"
                className="absolute top-full left-0 w-84 pt-2 z-50"
                role="menu"
              >
                <div className="p-3 liquid-glass-dock border border-white/15 rounded-2xl shadow-2xl shadow-black/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-3 py-1.5 border-b border-white/10 mb-1.5 flex items-center justify-between">
                    <span>Engineering Practices</span>
                    <span>{siteConfig.services.length.toString().padStart(2, '0')} SERVICES</span>
                  </div>
                  {siteConfig.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className="block px-3 py-2.5 rounded-xl text-xs hover:bg-white/10 hover:text-cyan-200 transition-colors group"
                      role="menuitem"
                    >
                      <div className="font-semibold text-slate-200 group-hover:text-cyan-300 flex items-center justify-between">
                        <span>{service.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {service.tagline}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/10 px-3">
                    <Link
                      href="/previews"
                      onClick={closeMenus}
                      className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-between py-1"
                    >
                      <span>Interactive Practice Previews</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/previews"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/previews') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Previews
          </Link>
          <Link
            href="/pricing"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname === '/pricing' ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/stories/"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/stories') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Stories
          </Link>
          <Link
            href="/resources/"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/resources') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Resources
          </Link>
          <Link
            href="/tools/"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/tools') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Tools
          </Link>
          <Link
            href="/security/"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/security') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Security
          </Link>
          <Link
            href="/#work"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Work
          </Link>
          <Link
            href="/solutions/"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname.startsWith('/solutions') ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/#process"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Process
          </Link>
          <Link
            href="/about"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname === '/about' ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-1.5 rounded-lg hover:text-white transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              pathname === '/contact' ? 'text-cyan-300 bg-white/5 border border-cyan-500/20' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold liquid-glass-btn-primary rounded-xl transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center">
          <button
            ref={mobileMenuButtonRef}
            id="mobile-menu-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl liquid-glass-pill"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          aria-labelledby="mobile-menu-button"
          className="md:hidden border-b border-white/10 liquid-glass-dock px-5 pt-3 pb-8 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl"
        >
          <div className="space-y-1">
            <div className="py-2 px-1 text-[10px] font-mono uppercase tracking-wider text-cyan-400">
              Services
            </div>
            <div className="grid grid-cols-1 gap-1">
              {siteConfig.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={closeMenus}
                  className="px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{service.shortTitle}</span>
                  <span className="text-[10px] text-slate-400 font-mono">SPEC</span>
                </Link>
              ))}
            </div>

            <div className="my-3 border-t border-slate-800/80" />

            <Link
              href="/previews"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/30 rounded-xl transition-colors"
            >
              Interactive Previews
            </Link>
            <Link
              href="/pricing"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Pricing &amp; Packages
            </Link>
            <Link
              href="/stories/"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Industry Stories
            </Link>
            <Link
              href="/resources/"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/30 rounded-xl transition-colors"
            >
              Free Developer Resources
            </Link>
            <Link
              href="/tools/"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/30 rounded-xl transition-colors"
            >
              Dev Lab (Browser Tools)
            </Link>
            <Link
              href="/security/"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/30 rounded-xl transition-colors"
            >
              Security &amp; Trust Centre
            </Link>
            <Link
              href="/payments"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Payments &amp; Invoices
            </Link>
            <Link
              href="/#work"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Selected Work
            </Link>
            <Link
              href="/solutions/"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 hover:bg-cyan-950/30 rounded-xl transition-colors"
            >
              Industry Solutions
            </Link>
            <Link
              href="/#process"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Delivery Process
            </Link>
            <Link
              href="/about"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              About Zelvori
            </Link>
            <Link
              href="/contact"
              onClick={closeMenus}
              className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 rounded-xl transition-colors"
            >
              Contact Engineering Desk
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 rounded-xl shadow-md"
            >
              <span>Schedule Project Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
