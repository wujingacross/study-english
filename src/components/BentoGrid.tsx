import { DailyStreak } from "./DailyStreak";
import { FeaturedNews } from "./FeaturedNews";
import { LearningVelocity } from "./LearningVelocity";
import { RecommendedReading } from "./RecommendedReading";

export const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <DailyStreak />
      <FeaturedNews />
      <LearningVelocity />
      <RecommendedReading />
    </div>
  );
};
