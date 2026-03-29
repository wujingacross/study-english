export const LibraryHeader = () => {
  return (
    <header className="max-w-7xl mx-auto mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label uppercase tracking-widest text-primary font-bold text-xs mb-2 block">Curation</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface">The Editorial Library</h1>
          <p className="text-on-surface-variant mt-4 max-w-2xl font-body text-lg leading-relaxed">
            Expand your cognitive horizons through our professionally curated selection of global news, timeless literature, and cutting-edge technical journals.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-lowest editorial-shadow rounded-full text-sm font-semibold border border-outline-variant/10 hover:bg-surface-container-low transition-colors">Latest</button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-semibold shadow-md">Popular</button>
        </div>
      </div>
    </header>
  );
};
