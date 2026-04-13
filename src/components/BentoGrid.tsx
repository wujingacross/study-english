import type { PageType } from "../App";
import { DailyStreak } from "./DailyStreak";
import { FeaturedNews } from "./FeaturedNews";
import { LearningVelocity } from "./LearningVelocity";
import { RecommendedReading } from "./RecommendedReading";

interface BentoGridProps {
  onNavigate: (page: PageType) => void;
}

export const BentoGrid = ({ onNavigate }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <DailyStreak />
      <FeaturedNews onNavigate={onNavigate} />
      <LearningVelocity />
      <RecommendedReading />
    </div>
  );
};
