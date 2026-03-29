export const FluencyPulse = () => {
  return (
    <div className="col-span-12 lg:col-span-4 bg-primary text-white rounded-xl p-8 relative overflow-hidden flex flex-col justify-between">
      <div className="relative z-10">
        <span className="label-md uppercase tracking-widest text-primary-fixed-dim font-bold text-xs opacity-80">
          Fluency Pulse
        </span>
        <h3 className="font-headline font-bold text-2xl mt-1">Pronunciation</h3>
        <div className="mt-6">
          <span className="text-5xl font-extrabold">
            92<span className="text-lg font-medium opacity-60">/100</span>
          </span>
          <div className="mt-2 inline-flex items-center px-2 py-1 bg-white/20 rounded-lg text-xs font-bold">
            <span className="material-symbols-outlined text-xs mr-1">trending_up</span> +4.2% from last week
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <svg className="w-full h-full preserve-3d" viewBox="0 0 400 100">
          <path
            d="M0 80 Q 50 20 100 80 T 200 80 T 300 80 T 400 80"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="4"
          ></path>
        </svg>
      </div>
      <button className="relative z-10 mt-8 py-3 bg-white text-primary rounded-xl font-bold text-sm shadow-lg hover:bg-slate-50 transition-colors">
        Review Recordings
      </button>
    </div>
  );
};
