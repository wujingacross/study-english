import { ReadingArea } from "./ReadingArea";
import { RecordingController } from "./RecordingController";
import { PronunciationModule } from "./PronunciationModule";
import { GrammarAnalysis } from "./GrammarAnalysis";
import { MetricsSidebar } from "./MetricsSidebar";
import { LinguisticInsights } from "./LinguisticInsights";

export const PracticeSession = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header Section with Asymmetry */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-2 block">
            Advanced Editorial Analysis
          </span>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
            The Future of <span className="text-primary italic">Linguistic Architecture</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Current Goal</p>
              <p className="font-bold text-lg">92% Fluency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Reading Area (Editorial Card) */}
        <div className="lg:col-span-8 space-y-8">
          <ReadingArea />
          <PronunciationModule />
          <GrammarAnalysis />
          <RecordingController />
        </div>

        {/* Metrics & Scoring (Bento Sidebar) */}
        <div className="lg:col-span-4 space-y-6">
          <MetricsSidebar />
        </div>
      </div>

      {/* Footer Section (Insights) */}
      <LinguisticInsights />
    </div>
  );
};
