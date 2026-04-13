import type { PageType } from "../App";

interface FeaturedNewsProps {
  onNavigate: (page: PageType) => void;
}

export const FeaturedNews = ({ onNavigate }: FeaturedNewsProps) => {
  return (
    <div className="md:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden relative min-h-[320px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Abstract cinematic background of layered old book pages and ink droplets in deep blue and charcoal tones"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiJu9CnfBc9M0DzA4sy8REH6xHRwxgPSnps1UuCyic3UdWnF3S7pDb4HQOVZOk0i_d4E12Xg3i6vJN3RdHOBvWiL831zoqTtzuuJWMB91c391u8Wfpx1uOxbWh75XcurSJMu3djs-DPGMDH0FMhOCo9aV9kFZV1Hp3Q5Eou_Nx4VXpus-IgZjsbeuRVbKqP22MzaxdXwNjznv_CjMxTOo53wn57LhVeygbcld63xzdy_JNLTXajOgZrHuvPp3NhdxQ9ye1PtPJqoM"
      />
      <div className="relative z-20 h-full p-8 flex flex-col justify-end">
        <span className="bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full w-fit mb-4">
          Featured Editorial
        </span>
        <h2 className="text-3xl font-bold text-white mb-2">The Architecture of Persuasion</h2>
        <p className="text-white/80 text-sm max-w-md mb-6">
          Explore the linguistic structures used by 18th-century essayists and their relevance in modern tech journalism.
        </p>
        <button
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 px-6 rounded-xl w-fit hover:bg-white/30 transition-all flex items-center gap-3"
          onClick={() => onNavigate('practice')}
        >
          Read Now <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};
