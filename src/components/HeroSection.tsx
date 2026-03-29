export const HeroSection = () => {
  return (
    <div className="relative mb-12 flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1 pt-4">
        <span className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-3 block">
          Scholar's Journey
        </span>
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
          Refining the Voice of <br />
          <span className="text-primary italic">Sophisticated Inquiry</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
          Your lexical depth has increased by 14% this month. Today's focus: Editorial nuances in academic peer reviews.
        </p>
      </div>
      <div className="w-full md:w-1/3 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
        <img
          className="w-full h-full object-cover"
          alt="High-end minimalist library desk with a clean open notebook, luxury fountain pen, and soft natural window light reflecting on glass"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc_0a-DbXs2NEy2ixlh8WCQPppwkKTTKjskTQI_-yQANG3JKi3yW1OULoSa07TvESlI9xvsorCQCnMcGlSgOFTpf6kzti1cQH7crnesqaIkTHSREVF-Xz2fJl2SiR9uV_qFPGK6zpjcUkP3R36SVhudslrlfPPf8JVG3U6iqsSOm0_DlUCJV146SaBe_ItHeNNCnMRM8vhOeRLgVH_DAdTv5U1fTFt9EovE2RDfarwLeRny_fcgaXa--bqJvmsBm0DTzpFMcT2cqk"
        />
      </div>
    </div>
  );
};
