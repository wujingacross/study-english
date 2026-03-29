export const DailyStreak = () => {
  return (
    <div className="md:col-span-4 bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-outline-variant/10">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-label text-sm uppercase font-bold text-on-surface-variant">Daily Streak</span>
          <span
            className="material-symbols-outlined text-tertiary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-extrabold text-on-surface">12</span>
          <span className="text-xl font-semibold text-on-surface-variant">Days</span>
        </div>
        <p className="text-sm text-on-secondary-container bg-secondary-container/20 px-3 py-1 rounded-full inline-block">
          Top 5% of Scholars
        </p>
      </div>
      <div className="mt-8">
        <div className="flex justify-between text-xs font-bold mb-2 uppercase text-slate-400">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
        <div className="flex justify-between">
          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-xs text-on-secondary-fixed">check</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-xs text-on-secondary-fixed">check</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-xs text-on-secondary-fixed">check</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary-gradient text-white flex items-center justify-center font-bold text-xs ring-4 ring-primary/10">
            12
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-low"></div>
          <div className="w-8 h-8 rounded-full bg-surface-container-low"></div>
          <div className="w-8 h-8 rounded-full bg-surface-container-low"></div>
        </div>
      </div>
    </div>
  );
};
