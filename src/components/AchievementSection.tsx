export const AchievementSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="bg-surface-container-low rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="z-10 flex-1">
          <span className="font-label uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Milestone Reached</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-6">You've unlocked the Scholar's Badge.</h2>
          <p className="text-on-surface-variant mb-8 text-lg">Your consistent reading habits have placed you in the top 5% of active scholars this month. Ready to challenge your limits with a C2 level dissertation?</p>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all">Take Assessment</button>
        </div>
        <div className="z-10 flex gap-4">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-tertiary-container rounded-3xl flex items-center justify-center text-on-tertiary-container shadow-inner">
            <span className="material-symbols-outlined text-6xl" data-icon="workspace_premium">workspace_premium</span>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};
