import { TopNavBar } from "./components/TopNavBar";
import { SideNavBar } from "./components/SideNavBar";
import { HeroSection } from "./components/HeroSection";
import { BentoGrid } from "./components/BentoGrid";
import { AchievementCard } from "./components/AchievementCard";
import { FloatingActionButton } from "./components/FloatingActionButton";

function App() {
  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main className="lg:ml-64 pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <BentoGrid />
          <AchievementCard />
        </div>
      </main>
      <FloatingActionButton />
    </>
  );
}

export default App;
