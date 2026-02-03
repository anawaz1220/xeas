'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
