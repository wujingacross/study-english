export const MetricsSidebar = () => {
  return (
    <>
      {/* Overall Score Card */}
      <div className="bg-primary text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-6">Session Performance</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-extrabold tracking-tighter">84</span>
            <span className="text-xl font-bold opacity-70">/ 100</span>
          </div>
          <p className="mt-4 text-sm font-medium opacity-90 leading-relaxed">
            You are articulating complex polysyllabic words with increasing confidence. Focus on the 'sh' sounds in the
            next paragraph.
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Individual Metrics */}
      <div className="grid grid-cols-1 gap-4">
        {/* Fluency */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-on-surface">Fluency</span>
            <span className="text-secondary font-bold">88%</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-secondary-fixed rounded-full"
              style={{ width: "88%" }}
            ></div>
          </div>
        </div>

        {/* Pronunciation */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-on-surface">Pronunciation</span>
            <span className="text-primary font-bold">76%</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
              style={{ width: "76%" }}
            ></div>
          </div>
        </div>

        {/* Intonation */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-on-surface">Intonation</span>
            <span className="text-tertiary font-bold">91%</span>
          </div>
          <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-tertiary to-tertiary-fixed-dim rounded-full"
              style={{ width: "91%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Achievement Badge (Editorial Style) */}
      <div className="bg-tertiary-container/10 p-6 rounded-2xl border border-tertiary-container/20 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
          <span
            className="material-symbols-outlined text-white"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            workspace_premium
          </span>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">New Milestone</p>
          <p className="text-sm font-semibold text-tertiary">10-Day Eloquence Streak</p>
        </div>
      </div>
    </>
  );
};
