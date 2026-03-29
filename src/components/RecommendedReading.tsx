export const RecommendedReading = () => {
  return (
    <div className="md:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/10">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-label text-sm uppercase font-bold text-on-surface-variant">Recommended Reading</h3>
        <a className="text-primary text-sm font-bold flex items-center gap-1" href="#">
          View Archive <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
      <div className="space-y-6">
        <div className="flex gap-6 group cursor-pointer">
          <div className="w-20 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              className="w-full h-full object-cover"
              alt="Cover of an academic journal with elegant serif typography and minimalist geometric shapes"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2PacaAN4Xc7pH26wVfVSR12zd__Iw_5-wJuX8NdoIhBniG3qJ9rHgjRC4wAT9-JH19_mTGn7oFnmzqxEU47xEOcigob_nb6iUT87xfOwC9tMJ9e_fito0OJT04vk4gc9J8NKRvq5iyAt4xSqq7BqIPVaTQ4uXf4nyYOOnwV9fpujQvEOy2nlt6ZiE1mKhAEgdzJ05SC3AYkVRLutG-EpdZlderGYuJIuMFCwyUU5RAUCwd01FPvWKsKZS3hfxNCv_9bZXHMZWGQ"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-on-secondary-container bg-secondary-container/30 px-2 py-0.5 rounded w-fit mb-2 font-bold uppercase tracking-tighter">
              Advanced Philosophy
            </span>
            <h4 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">
              The Ethics of Algorithmic Bias
            </h4>
            <p className="text-sm text-on-surface-variant line-clamp-2">
              A deep dive into the normative implications of machine learning frameworks.
            </p>
          </div>
        </div>
        <div className="flex gap-6 group cursor-pointer">
          <div className="w-20 h-28 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              className="w-full h-full object-cover"
              alt="Minimalist book cover design showing stylized ink wash mountain silhouettes"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJcbHQWI5QmAw4ykfSyw_FMCiVzstBOEfppVnG1q-A073Q5fL0_kVSeBJyRhox0uhLPtP1jar-cDzHg-9EfRkSrNtbaZZnyTBK5TigsBX3rB6Hde4sMfperNHpg9LrgqnQ8qy15UbSa4fzz6709EttHyyxvVWgzQtHVQp4Oo7qunVpnVR7w2Hgh14D4jQatP5L8RaafoAPpCjSMUAyT9XntatnTalAARuSn5_4s8QKYWYEGimNH3qRQkKmLf7u8wcS1KpYu6U0rLg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-on-primary-fixed-variant bg-primary-fixed/50 px-2 py-0.5 rounded w-fit mb-2 font-bold uppercase tracking-tighter">
              Literature Analysis
            </span>
            <h4 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">
              Post-Modernism in East Asian Poetry
            </h4>
            <p className="text-sm text-on-surface-variant line-clamp-2">
              Tracing the shift from traditional forms to fragmented urban narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
