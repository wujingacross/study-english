export const FilterGrid = () => {
  return (
    <section className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2 bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <h3 className="font-headline font-bold text-xl mb-2">Advanced C1 Focus</h3>
          <p className="text-on-surface-variant text-sm">Personalized picks based on your recent vocabulary progress.</p>
        </div>
        <div className="mt-8 flex gap-2">
          <span className="px-3 py-1 bg-surface-container-lowest rounded-full text-[10px] font-bold uppercase tracking-tighter text-secondary">New Releases</span>
          <span className="px-3 py-1 bg-surface-container-lowest rounded-full text-[10px] font-bold uppercase tracking-tighter text-primary">Academic</span>
        </div>
      </div>
      <div className="bg-primary-container text-on-primary-container p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-2">
        <span className="material-symbols-outlined text-4xl" data-icon="auto_stories">auto_stories</span>
        <p className="font-headline font-bold">12 New Articles</p>
        <p className="text-xs opacity-80">Added this week</p>
      </div>
      <div className="bg-secondary-container text-on-secondary-container p-6 rounded-3xl flex flex-col items-center justify-center text-center gap-2">
        <span className="material-symbols-outlined text-4xl" data-icon="timer">timer</span>
        <p className="font-headline font-bold">Quick Reads</p>
        <p className="text-xs opacity-80">Under 5 minutes</p>
      </div>
    </section>
  );
};
