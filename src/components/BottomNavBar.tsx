interface BottomNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNavBar = ({ activeTab, setActiveTab }: BottomNavBarProps) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/85 backdrop-blur-md flex justify-around items-center py-4 px-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <button
        onClick={() => setActiveTab("library")}
        className={`flex flex-col items-center gap-1 ${activeTab === "library" ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="menu_book" style={activeTab === "library" ? { fontVariationSettings: "'FILL' 1" } : {}}>menu_book</span>
        <span className={`text-[10px] ${activeTab === "library" ? "font-bold" : ""}`}>Library</span>
      </button>
      <button
        onClick={() => setActiveTab("practice")}
        className={`flex flex-col items-center gap-1 ${activeTab === "practice" ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="mic_none" style={activeTab === "practice" ? { fontVariationSettings: "'FILL' 1" } : {}}>mic_none</span>
        <span className={`text-[10px] ${activeTab === "practice" ? "font-bold" : ""}`}>Practice</span>
      </button>
      <button
        onClick={() => setActiveTab("progress")}
        className={`flex flex-col items-center gap-1 ${activeTab === "progress" ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="insights" style={activeTab === "progress" ? { fontVariationSettings: "'FILL' 1" } : {}}>insights</span>
        <span className={`text-[10px] ${activeTab === "progress" ? "font-bold" : ""}`}>Progress</span>
      </button>
    </nav>
  );
};
