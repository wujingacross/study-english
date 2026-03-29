export const RecordingController = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-4">
      <button className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
        <span className="material-symbols-outlined">replay</span>
      </button>
      <button className="w-24 h-24 rounded-full bg-primary-gradient shadow-xl flex items-center justify-center text-white relative group">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 scale-125"></div>
        <span
          className="material-symbols-outlined text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          mic
        </span>
      </button>
      <button className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
        <span className="material-symbols-outlined">skip_next</span>
      </button>
    </div>
  );
};
