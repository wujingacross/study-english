import { useState } from "react";

export const ReadingArea = () => {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

      <div className="flex justify-end mb-6 relative z-10">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all ${
            showTranslation
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary hover:bg-primary/20"
          }`}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          <span className="material-symbols-outlined text-sm">
            {showTranslation ? "visibility_off" : "translate"}
          </span>
          {showTranslation ? "Hide Translation" : "Show Translation"}
        </button>
      </div>

      <div className="prose prose-slate max-w-none relative z-10">
        <p className="text-2xl md:text-3xl leading-relaxed font-medium text-slate-800">
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">Effective</span>{" "}
          communication is not merely the{" "}
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">exchange</span>{" "}
          of information, but the{" "}
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">deliberate</span>{" "}
          <span className="bg-error-container text-on-error-container px-1 rounded underline decoration-error/30">
            articulation
          </span>{" "}
          of intent. In a globalized{" "}
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">economy</span>, the nuance
          of one's{" "}
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">vocabulary</span> serves
          as a{" "}
          <span className="bg-error-container text-on-error-container px-1 rounded underline decoration-error/30">
            differentiator
          </span>{" "}
          between{" "}
          <span className="bg-secondary-container/40 text-on-secondary-container px-1 rounded">competence</span> and
          mastery.
        </p>
        <p className="text-2xl md:text-3xl leading-relaxed font-medium text-slate-800 mt-8">
          To achieve <span className="text-slate-400">eloquence, one must navigate the phonetic complexities of the English language with both precision and rhythmic grace.</span>
        </p>
      </div>

      {showTranslation && (
        <div className="mt-12 pt-12 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500 relative z-10">
          <div className="flex items-center gap-2 mb-6 opacity-60">
            <span className="material-symbols-outlined text-sm">g_translate</span>
            <span className="text-xs font-bold uppercase tracking-widest">Academic Translation</span>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-600 italic">
              有效的沟通不仅仅是信息的交换，更是意图的精心表达。在全球化的经济背景下，个人词汇运用的细微差别成为了平庸与精通之间的分水岭。
            </p>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-slate-600 italic mt-6">
              若要达到雄辩的境界，必须以精准且富有韵律感的姿态，应对英语语音中错综复杂的挑战。
            </p>
          </div>
        </div>
      )}

      {/* Progress Waveform (Glassmorphism) */}
      <div className="mt-12 p-6 rounded-2xl bg-surface-container-low/50 backdrop-blur-md border border-white/20 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Audio Spectrum Analysis</span>
          <span className="text-xs font-medium text-secondary flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-secondary"></span> Live Feedback Active
          </span>
        </div>
        <div className="h-16 flex items-end gap-1 px-2">
          <div className="flex-1 bg-secondary rounded-full waveform-bar" style={{ height: "40%" }}></div>
          <div className="flex-1 bg-secondary rounded-full waveform-bar" style={{ height: "60%" }}></div>
          <div className="flex-1 bg-secondary rounded-full waveform-bar" style={{ height: "35%" }}></div>
          <div className="flex-1 bg-secondary rounded-full waveform-bar" style={{ height: "75%" }}></div>
          <div className="flex-1 bg-primary rounded-full waveform-bar" style={{ height: "90%" }}></div>
          <div className="flex-1 bg-primary rounded-full waveform-bar" style={{ height: "80%" }}></div>
          <div className="flex-1 bg-primary rounded-full waveform-bar" style={{ height: "65%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "40%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "30%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "45%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "20%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "35%" }}></div>
          <div className="flex-1 bg-slate-300 rounded-full waveform-bar" style={{ height: "15%" }}></div>
        </div>
      </div>
    </div>
  );
};
