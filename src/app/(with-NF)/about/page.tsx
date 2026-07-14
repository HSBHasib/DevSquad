import React from "react";
import ArchitecturalPillars from "@/components/about/aboutArchitecturalPillars/ArchitecturalPillars";
import AboutBanner from "@/components/about/aboutBanner/AboutBanner";
import EcosystemMatrix from "@/components/about/aboutEcosystemMatrix/EcosystemMatrix";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - DevSquad",
  description: "Learn more about DevSquad and our mission to revolutionize micro-team formation.",
};

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen text-gray-300 pb-24 overflow-x-hidden">
      <AboutBanner />
      <ArchitecturalPillars />
      <EcosystemMatrix />
    </div>
  );
};

export default AboutPage;
