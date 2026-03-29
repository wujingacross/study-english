export const GrammarAnalysis = () => {
  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            schema
          </span>
        </div>
        <div>
          <h3 className="font-headline text-xl font-extrabold text-on-surface">Grammar Analysis</h3>
          <p className="text-sm text-slate-500 mt-1">Structural breakdown of high-level academic syntax</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Sentence Visual Breakdown */}
        <div className="relative pt-6 pb-2 px-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex flex-wrap items-center gap-y-10 gap-x-2 text-xl md:text-2xl font-medium leading-relaxed">
            <span className="relative">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm absolute -top-[14px] left-0 whitespace-nowrap bg-primary-fixed text-on-primary-fixed">
                Subject
              </span>
              <span className="border-b-4 border-primary-fixed pb-1">Effective communication</span>
            </span>
            <span className="relative">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm absolute -top-[14px] left-0 whitespace-nowrap bg-secondary-fixed text-on-secondary-fixed">
                Verb (Negated)
              </span>
              <span className="border-b-4 border-secondary-fixed pb-1">is not merely</span>
            </span>
            <span className="relative group cursor-help">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm absolute -top-[14px] left-0 whitespace-nowrap bg-tertiary-fixed text-on-tertiary-fixed">
                Object Phrase
              </span>
              <span className="border-b-4 border-tertiary-fixed pb-1">the exchange of information</span>
              <div className="absolute bottom-full left-0 mb-4 hidden group-hover:block w-64 bg-slate-900 text-white text-xs p-3 rounded-lg z-20 shadow-xl">
                <p className="font-bold mb-1">Noun Phrase Coordination</p>
                Using "not merely... but" creates a correlative structure that emphasizes the second part of the statement.
              </div>
            </span>
            <span>, but the</span>
            <span className="relative group cursor-help">
              <span className="text-[0.65rem] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm absolute -top-[14px] left-0 whitespace-nowrap bg-error-container text-on-error-container">
                Modified Complement
              </span>
              <span className="border-b-4 border-error-container pb-1">deliberate articulation of intent.</span>
              <div className="absolute bottom-full right-0 mb-4 hidden group-hover:block w-64 bg-slate-900 text-white text-xs p-3 rounded-lg z-20 shadow-xl">
                <p className="font-bold mb-1">Parallelism</p>
                The second complement mirrors the structure of the first, maintaining rhythmic balance in the prose.
              </div>
            </span>
          </div>
        </div>

        {/* Academic Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-lg">info</span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-700">Syntactic Focus</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The use of the <span className="font-bold text-primary">"not merely X, but Y"</span> construction is a
              hallmark of sophisticated rhetoric. It allows the writer to acknowledge a common definition while simultaneously
              elevating a more nuanced perspective.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-tertiary text-lg">school</span>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-700">Academic Utility</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              In peer-reviewed journals, this structure is employed to <span className="italic">refine definitions</span>{" "}
              and establish a conceptual framework before delving into complex data analysis or theoretical arguments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
