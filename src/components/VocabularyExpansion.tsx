export const VocabularyExpansion = () => {
  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-headline font-bold text-xl">Vocabulary Expansion</h3>
          <p className="text-slate-500 text-sm">New lexical items acquired vs retention rate</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-tighter">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-primary"></span> Acquired
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-secondary"></span> Retained
          </div>
        </div>
      </div>
      <div className="h-64 flex items-end justify-between gap-4 px-2">
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-24 transition-all group-hover:h-28"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-16 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">MON</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-16 transition-all group-hover:h-20"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-12 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">TUE</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-28 transition-all group-hover:h-30"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-24 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">WED</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-20 transition-all group-hover:h-24"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-18 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">THU</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-32 transition-all group-hover:h-full"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-28 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">FRI</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-12 transition-all group-hover:h-16"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-10 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">SAT</span>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-primary/10 rounded-t-lg relative group h-32">
            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg h-24 transition-all group-hover:h-28"></div>
            <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg h-20 opacity-40"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">SUN</span>
        </div>
      </div>
    </div>
  );
};
