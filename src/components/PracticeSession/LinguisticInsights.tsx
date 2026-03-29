export const LinguisticInsights = () => {
  return (
    <section className="mt-16 border-t border-slate-200 pt-12">
      <div className="flex items-center gap-2 mb-8">
        <span className="material-symbols-outlined text-primary">auto_awesome</span>
        <h2 className="font-headline text-xl font-bold">Linguistic Insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-2xl">
          <p className="text-primary font-bold mb-2">Pacing Analysis</p>
          <p className="text-sm text-slate-600">
            Your average tempo is 142 words per minute, which aligns with natural professional speech patterns.
          </p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl">
          <p className="text-primary font-bold mb-2">Vocal Clarity</p>
          <p className="text-sm text-slate-600">
            Consonant clusters in "articulation" showed slight blurring. Practice slowing down on three-syllable transitions.
          </p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl">
          <p className="text-primary font-bold mb-2">Contextual Stress</p>
          <p className="text-sm text-slate-600">
            Excellent emphasis on the word "mastery". This correctly highlights the semantic weight of the sentence.
          </p>
        </div>
      </div>
    </section>
  );
};
