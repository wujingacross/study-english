export const CognitiveFocusAreas = () => {
  return (
    <div className="col-span-12 lg:col-span-5 bg-surface-container-low rounded-xl p-8">
      <h3 className="font-headline font-bold text-xl mb-6">Cognitive Focus Areas</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-on-surface">Subjunctive Mood Usage</span>
            <span className="text-error font-bold">Needs Focus</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-error w-[35%] rounded-full"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-on-surface">Idiomatic Prepositions</span>
            <span className="text-tertiary font-bold">Improving</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-[58%] rounded-full"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-on-surface">Phonetic Liaisons</span>
            <span className="text-secondary font-bold">Stable</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[82%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 bg-white/50 rounded-xl border border-outline-variant/20 italic text-sm text-slate-600">
        "Your use of academic transitions has improved by 15%, but sentence variety in complex narratives remains a challenge."
      </div>
    </div>
  );
};
