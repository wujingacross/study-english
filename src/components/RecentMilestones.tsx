export const RecentMilestones = () => {
  return (
    <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline font-bold text-xl">Recent Milestones</h3>
        <a className="text-primary text-xs font-bold uppercase hover:underline" href="#">
          View History
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
          <div>
            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Advanced Phonetics Unit</h4>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tighter">
              Completed 2h ago • 98% Score
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-12 h-12 flex-shrink-0 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              article
            </span>
          </div>
          <div>
            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Economic Editorial Reading</h4>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tighter">
              Completed Yesterday • B+ Level
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-12 h-12 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              forum
            </span>
          </div>
          <div>
            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Live Seminar: Global Policy</h4>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tighter">
              Attended Oct 24 • Active Participant
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-surface rounded-xl hover:bg-slate-50 transition-colors group">
          <div className="w-12 h-12 flex-shrink-0 bg-surface-container-high text-slate-400 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">quiz</span>
          </div>
          <div>
            <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Weekly Proficiency Mock</h4>
            <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tighter">
              Completed Oct 23 • C1 Level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
