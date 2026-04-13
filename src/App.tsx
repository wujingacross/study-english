"use client";

import { useState } from "react";
import { TopNavBar } from "./components/TopNavBar";
import { SideNavBar } from "./components/SideNavBar";
import { BottomNavBar } from "./components/BottomNavBar";
import { PracticeSession } from "./components/PracticeSession";
import { DashboardHeader } from "./components/DashboardHeader";
import { VocabularyExpansion } from "./components/VocabularyExpansion";
import { FluencyPulse } from "./components/FluencyPulse";
import { CognitiveFocusAreas } from "./components/CognitiveFocusAreas";
import { RecentMilestones } from "./components/RecentMilestones";
import { ScholarQuote } from "./components/ScholarQuote";
import { LibraryHeader } from "./components/LibraryHeader";
import { FilterGrid } from "./components/FilterGrid";
import { FeaturedArticles } from "./components/FeaturedArticles";
import { AchievementSection } from "./components/AchievementSection";
import { HeroSection } from "./components/HeroSection";
import { BentoGrid } from "./components/BentoGrid";
import { AchievementCard } from "./components/AchievementCard";

function App() {
  const [activeTab, setActiveTab] = useState("practice");

  return (
    <>
      <TopNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SideNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "practice" && (
        <main className="lg:ml-64 pt-24 px-6 lg:px-12 pb-12">
          <PracticeSession />
        </main>
      )}
      {activeTab === "progress" && (
        <main className="lg:ml-64 pt-24 p-8 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <DashboardHeader />
            <div className="grid grid-cols-12 gap-6">
              <VocabularyExpansion />
              <FluencyPulse />
              <CognitiveFocusAreas />
              <RecentMilestones />
            </div>
            <ScholarQuote />
          </div>
        </main>
      )}
      {/* {activeTab === "library" && (
        <main className="lg:ml-64 pt-24 pb-12 px-6 md:px-12">
          <LibraryHeader />
          <FilterGrid />
          <FeaturedArticles />
          <AchievementSection />
        </main>
      )} */}
      {activeTab === "library" && (
        <main className="lg:ml-64 pt-24 pb-12 px-6 md:px-12">
          <HeroSection />
          <BentoGrid />
          <AchievementCard />
        </main>
      )}
      <div className="md:hidden">
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default App;
