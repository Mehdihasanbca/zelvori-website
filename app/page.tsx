import React from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/home/HeroSection';

// Code-split below-the-fold sections to defer non-critical JavaScript on mobile devices
// while preserving 100% static HTML generation during export.
const SelectedWorkSection = dynamic(
  () => import('@/components/home/SelectedWorkSection').then((mod) => mod.SelectedWorkSection),
  { ssr: true }
);

const ServicesSection = dynamic(
  () => import('@/components/home/ServicesSection').then((mod) => mod.ServicesSection),
  { ssr: true }
);

const CapabilitiesSection = dynamic(
  () => import('@/components/home/CapabilitiesSection').then((mod) => mod.CapabilitiesSection),
  { ssr: true }
);

const ProcessSection = dynamic(
  () => import('@/components/home/ProcessSection').then((mod) => mod.ProcessSection),
  { ssr: true }
);

const SolutionsSection = dynamic(
  () => import('@/components/home/SolutionsSection').then((mod) => mod.SolutionsSection),
  { ssr: true }
);

const AiAutomationSection = dynamic(
  () => import('@/components/home/AiAutomationSection').then((mod) => mod.AiAutomationSection),
  { ssr: true }
);

const ApproachSection = dynamic(
  () => import('@/components/home/ApproachSection').then((mod) => mod.ApproachSection),
  { ssr: true }
);

const FaqSection = dynamic(
  () => import('@/components/home/FaqSection').then((mod) => mod.FaqSection),
  { ssr: true }
);

const ContactCtaSection = dynamic(
  () => import('@/components/home/ContactCtaSection').then((mod) => mod.ContactCtaSection),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <ServicesSection />
      <CapabilitiesSection />
      <ProcessSection />
      <SolutionsSection />
      <AiAutomationSection />
      <ApproachSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
