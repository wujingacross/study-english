export const DashboardHeader = () => {
  return (
    <header className="mb-10 flex justify-between items-end">
      <div>
        <span className="label-md uppercase tracking-wider text-primary font-bold text-xs">Performance Overview</span>
        <h1 className="text-4xl font-extrabold font-headline mt-2 text-on-surface">Intellectual Growth</h1>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-white border-none shadow-sm text-slate-600 hover:bg-slate-50">
          Last 7 Days
        </button>
        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-surface-container-low text-primary shadow-sm">
          Last 30 Days
        </button>
      </div>
    </header>
  );
};
