"use client";

import { DashboardHeader } from "../../components/DashboardHeader";
import { VocabularyExpansion } from "../../components/VocabularyExpansion";
import { FluencyPulse } from "../../components/FluencyPulse";
import { CognitiveFocusAreas } from "../../components/CognitiveFocusAreas";
import { RecentMilestones } from "../../components/RecentMilestones";
import { ScholarQuote } from "../../components/ScholarQuote";

export default function ProgressPage() {
  return (
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
  );
}
