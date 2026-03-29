export const PronunciationModule = () => {
  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-slate-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="font-headline text-xl font-extrabold text-on-surface">Pronunciation Comparison</h3>
          <p className="text-sm text-slate-500 mt-1">Phonetic breakdown of key editorial terms</p>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 shrink-0">
          <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white shadow-sm text-primary transition-all">
            PHONEMES
          </button>
          <button className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-700 transition-all">
            INTONATION
          </button>
        </div>
      </div>

      {/* Waveform Comparison Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Standard Audio
            </span>
            <button className="flex items-center gap-1 text-primary text-xs font-bold hover:underline">
              <span className="material-symbols-outlined text-sm">play_circle</span> Listen
            </button>
          </div>
          <div className="h-20 bg-slate-50 rounded-xl flex items-center gap-1 px-4 border border-slate-100/50">
            <div className="flex-1 bg-slate-300 waveform-bar rounded-full" style={{ height: "40%" }}></div>
            <div className="flex-1 bg-slate-400 waveform-bar rounded-full" style={{ height: "60%" }}></div>
            <div className="flex-1 bg-slate-300 waveform-bar rounded-full" style={{ height: "50%" }}></div>
            <div className="flex-1 bg-slate-400 waveform-bar rounded-full" style={{ height: "80%" }}></div>
            <div className="flex-1 bg-slate-300 waveform-bar rounded-full" style={{ height: "70%" }}></div>
            <div className="flex-1 bg-slate-400 waveform-bar rounded-full" style={{ height: "90%" }}></div>
            <div className="flex-1 bg-slate-300 waveform-bar rounded-full" style={{ height: "65%" }}></div>
            <div className="flex-1 bg-slate-400 waveform-bar rounded-full" style={{ height: "45%" }}></div>
            <div className="flex-1 bg-slate-300 waveform-bar rounded-full" style={{ height: "30%" }}></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Your Attempt
            </span>
            <button className="flex items-center gap-1 text-slate-400 text-xs font-bold hover:text-slate-600">
              <span className="material-symbols-outlined text-sm">replay</span> Playback
            </button>
          </div>
          <div className="h-20 bg-blue-50/50 rounded-xl flex items-center gap-1 px-4 border border-blue-100/50">
            <div className="flex-1 bg-blue-300 waveform-bar rounded-full" style={{ height: "35%" }}></div>
            <div className="flex-1 bg-blue-400 waveform-bar rounded-full" style={{ height: "55%" }}></div>
            <div className="flex-1 bg-orange-400 waveform-bar rounded-full" style={{ height: "30%" }}></div>
            <div className="flex-1 bg-blue-400 waveform-bar rounded-full" style={{ height: "85%" }}></div>
            <div className="flex-1 bg-blue-300 waveform-bar rounded-full" style={{ height: "60%" }}></div>
            <div className="flex-1 bg-orange-400 waveform-bar rounded-full" style={{ height: "40%" }}></div>
            <div className="flex-1 bg-blue-300 waveform-bar rounded-full" style={{ height: "60%" }}></div>
            <div className="flex-1 bg-blue-400 waveform-bar rounded-full" style={{ height: "50%" }}></div>
            <div className="flex-1 bg-blue-300 waveform-bar rounded-full" style={{ height: "25%" }}></div>
          </div>
        </div>
      </div>

      {/* Phoneme Breakdown Section */}
      <div className="space-y-6">
        <div className="p-5 rounded-2xl bg-surface-container-low/50 border border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                1
              </div>
              <h4 className="font-bold text-lg text-slate-800">Articulation</h4>
            </div>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-sm">compare_arrows</span> Listen to Difference
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                Standard IPA
              </p>
              <div className="flex flex-wrap gap-1 text-xl font-mono text-slate-700">
                <span className="px-2 py-1 bg-white rounded shadow-sm">ɑːr</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">tɪk</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">jʊ</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">leɪ</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">ʃən</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                Your Production
              </p>
              <div className="flex flex-wrap gap-1 text-xl font-mono">
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  ɑːr
                </span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  tɪk
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded border border-orange-200 font-bold">
                  juː
                </span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  leɪ
                </span>
                <span className="px-2 py-1 bg-error-container/30 text-error rounded border border-error/20 font-bold">
                  sən
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-low/50 border border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                2
              </div>
              <h4 className="font-bold text-lg text-slate-800">Architecture</h4>
            </div>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-sm">compare_arrows</span> Listen to Difference
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                Standard IPA
              </p>
              <div className="flex flex-wrap gap-1 text-xl font-mono text-slate-700">
                <span className="px-2 py-1 bg-white rounded shadow-sm">ɑːr</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">kɪ</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">tek</span>
                <span className="px-2 py-1 bg-white rounded shadow-sm">tʃər</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                Your Production
              </p>
              <div className="flex flex-wrap gap-1 text-xl font-mono">
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  ɑːr
                </span>
                <span className="px-2 py-1 bg-error-container/30 text-error rounded border border-error/20 font-bold">
                  tʃɪ
                </span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  tek
                </span>
                <span className="px-2 py-1 bg-secondary-container/30 text-secondary-container rounded border border-secondary/20 font-bold">
                  tʃər
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
