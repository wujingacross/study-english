export const AchievementCard = () => {
  return (
    <div className="mt-12 bg-surface-container-high rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="relative z-10 md:w-2/3">
        <span className="material-symbols-outlined text-5xl text-tertiary-container mb-4">
          workspace_premium
        </span>
        <h2 className="text-3xl font-bold text-on-surface mb-4">Oxford Linguistic Proficiency</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
          You are currently 82% towards achieving the Advanced C2 Certification. Complete 4 more
          editorial analyses to unlock the final assessment.
        </p>
        <div className="w-full h-3 bg-outline-variant/20 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-primary-gradient w-[82%] rounded-full"></div>
        </div>
        <div className="flex justify-between text-sm font-bold text-primary">
          <span>Progress: 82%</span>
          <span>Level C2 Elite</span>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="relative">
          <div className="w-48 h-48 rounded-full border-8 border-white bg-tertiary-container/10 flex items-center justify-center relative z-10">
            <span
              className="material-symbols-outlined text-7xl text-tertiary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              history_edu
            </span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-outline-variant/10 whitespace-nowrap z-20">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <span className="text-xs font-bold">Verified Scholar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
