"use client";

import { HeroSection } from "../../components/HeroSection";
import { BentoGrid } from "../../components/BentoGrid";
import { AchievementCard } from "../../components/AchievementCard";

export default function LibraryPage() {
  return (
    <main className="lg:ml-64 pt-24 pb-12 px-6 md:px-12">
      <HeroSection />
      <BentoGrid />
      <AchievementCard />
    </main>
  );
}
