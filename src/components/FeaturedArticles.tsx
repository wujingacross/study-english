export const FeaturedArticles = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-headline font-bold text-2xl">Featured Articles</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <button className="text-primary font-bold border-b-2 border-primary whitespace-nowrap">All Topics</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">News</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Literature</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Tech</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Article Card 1 */}
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col group transition-all hover:translate-y-[-4px]">
          <div className="h-56 overflow-hidden relative">
            <img alt="Modern silicon chips" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up shot of microscopic electronic circuits on a blue silicon wafer with glowing golden highlights and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_VgXa50UHd6HuAZmukqXa3oJ5t-VBFAP0d-xeusKyl7nPqlZUh9kpRkq3CvVY5OVce3mqO0Gkci8CIMwUQdt6S5cb_X5VCOVClWaPk67e62qMLe_liiRCgwEEQt3GscRVnYftIP6zhRh_a8kKpOX7UgbWHstFaxmhdTPtQeMREx-Xn7A16Iq5HPINXR6v9vCBLpl29obJYlz91tyOFlEIj0-Kj0BFN7wc53y8Y0CKLEflqa8d88EaQ-DsL8DFS37CsnnCflcYDg"/>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary/90 text-on-primary backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Tech</span>
              <span className="bg-white/90 text-on-surface backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">C1</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-4">
              <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
              <span>12 min read</span>
              <span className="mx-1">•</span>
              <span>By Dr. Sarah Jenkins</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">Quantum Supremacy: Beyond the Standard Narrative</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">An analytical exploration of how quantum computing is reshaping cryptography and computational boundaries in the 21st century.</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
              <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                                Read Full Article
                                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </button>
              <button className="text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="bookmark_add">bookmark_add</span>
              </button>
            </div>
          </div>
        </article>
        {/* Article Card 2 */}
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col group transition-all hover:translate-y-[-4px]">
          <div className="h-56 overflow-hidden relative">
            <img alt="Abstract city morning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Wide angle view of a modern cityscape at dawn with soft orange sunlight reflecting off glass skyscrapers and morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNum3i0qNt-mLqza3in0pXFYDaK9tSg0RGZDr2-GEG-m7ElU1x8_7l-jkJoSqhnXcvxEdwAT7LUsGAwqJeQWod5LkvUiVa-8FH-QnnD5lxJqjwcWZ3ZfHhTmS49Ti1zzjkhfM1Iqyi-tRElSp0aTNpSq0DS1TPI2ZxU3MNvs9XWnnIredPxCvFxqZ9-vVe0j5WpeFuAtK2zZvlUSpbavnfq71DA68lqgdRAE4xkqTTlbv1C61NMCRbvwz0Fw-E1b_1QAXK6vQ2ODc"/>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-secondary/90 text-on-primary backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">News</span>
              <span className="bg-white/90 text-on-surface backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">B2</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-4">
              <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
              <span>8 min read</span>
              <span className="mx-1">•</span>
              <span>Editorial Staff</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">The Rebirth of Urban Greenery</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">Metropolitan areas across Europe are leading a radical shift toward botanical architecture and community-driven vertical gardens.</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
              <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                                Read Full Article
                                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </button>
              <button className="text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="bookmark_add">bookmark_add</span>
              </button>
            </div>
          </div>
        </article>
        {/* Article Card 3 */}
        <article className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col group transition-all hover:translate-y-[-4px]">
          <div className="h-56 overflow-hidden relative">
            <img alt="Starry mountain night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cinematic night landscape showing snow-capped mountains under a vast milky way galaxy with crisp stars and deep blue shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-vPNqiyDI1uGhvr7P-8HKvUSfv203tas30ihaxrJjG31XFz3o23OEZXVoiTUGQzT_AP7550PsPYmRQiAJ6b9R5J9-HzuYDQMSAlbVRwiFH88DxeGm3GH4puTQAGtWNc9Fil1BC1otFGMz1uQWSRizpsmfOsmdJab4gVnMU9l9qi2SrQTYQY-7e9iu8emzupdECg8cAGYTbb9EJs5CnxwR7QeNJRhChT4VrzAINl9kReJ3UvKgeXyztDG3hH1DH4HnPJTvvYav8k"/>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-tertiary/90 text-on-primary backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Literature</span>
              <span className="bg-white/90 text-on-surface backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">C2</span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-4">
              <span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
              <span>25 min read</span>
              <span className="mx-1">•</span>
              <span>Thomas Vance</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">Echoes of the High Altiplano</h3>
            <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">A masterful short story exploring isolation and connection in the remote corners of the world, utilizing complex grammatical structures and archaic vocabulary.</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
              <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                                Read Full Article
                                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
              </button>
              <button className="text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="bookmark_add">bookmark_add</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
