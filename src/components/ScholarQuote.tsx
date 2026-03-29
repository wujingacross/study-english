export const ScholarQuote = () => {
  return (
    <footer className="mt-12 py-10 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-6 max-w-2xl">
        <img
          alt="Advisor Portrait"
          className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white"
          data-alt="Portrait of a focused professional woman in a modern library setting, warm intellectual lighting, shallow depth of field"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrWNPln_mgMFTZgWgKwME7Csk7UgV_LOJH3dd_Xols5fA7DRilZ61m4jyU_7yXJIj6XQP4F6NG0U2xSC-UIjRjDSlA4pdvRhJxv6VopoX4Fowqcu5dhXwQcSai2Ih98jJFqt_LpLstDyajRxaYHibjV5hEuCJ2FAFSdlOpEvub2_3dHH-gYut53cOWqhXbWKoI-8nOjLafeuO8-m0Hvww4AsRK1AlgpE0kPrNEdZogV6bvpqpL4NYGgAELM-ehoL9HVdewZZeZ0o"
        />
        <div>
          <p className="text-slate-600 leading-relaxed italic">
            "Excellence is not an act, but a habit. Your consistency in high-frequency vocabulary retention is currently in the top 5% of global scholars."
          </p>
          <p className="mt-2 font-bold text-on-surface">
            — Dr. Helena Vance, <span className="text-primary">Linguistic Advisor</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-center px-6 py-4 bg-white rounded-xl shadow-sm">
          <span className="block text-2xl font-extrabold text-primary">128</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Day Streak</span>
        </div>
        <div className="text-center px-6 py-4 bg-white rounded-xl shadow-sm">
          <span className="block text-2xl font-extrabold text-secondary">4.8k</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Points</span>
        </div>
      </div>
    </footer>
  );
};
