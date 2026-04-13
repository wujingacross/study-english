import { useState } from "react";
import { TopNavBar } from "./components/TopNavBar";
import { SideNavBar } from "./components/SideNavBar";
import { PracticeSession } from "./components/PracticeSession";
import { HeroSection } from "./components/HeroSection";
import { BentoGrid } from "./components/BentoGrid";
import { AchievementCard } from "./components/AchievementCard";
import { FloatingActionButton } from "./components/FloatingActionButton";

export type PageType = 'library' | 'practice' | 'progress' | 'topics' | 'levels';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('library');

  return (
    <>
      <TopNavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SideNavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="lg:ml-64 pt-24 px-6 lg:px-12 pb-12">
        {currentPage === 'library' && (
          <div className="max-w-6xl mx-auto">
            <HeroSection />
            <BentoGrid onNavigate={setCurrentPage} />
            <AchievementCard />
          </div>
        )}
        {currentPage === 'practice' && <PracticeSession />}
        {/* Placeholder for other pages */}
        {['progress', 'topics', 'levels'].includes(currentPage) && (
          <div className="flex items-center justify-center h-64 text-slate-500">
            {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} page coming soon...
          </div>
        )}
      </main>

      {/* Contextual FAB Suppression (FAB is only for starting actions, suppressed here as we are in active session) */}
      {currentPage === 'library' && <FloatingActionButton />}
    </>
  );
}

export default App;
