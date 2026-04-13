import type { PageType } from "../App";

interface SideNavBarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export const SideNavBar = ({ currentPage, setCurrentPage }: SideNavBarProps) => {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col p-4 pt-20 bg-slate-50 dark:bg-slate-950 bg-slate-100 dark:bg-slate-900 z-40">
      <div className="px-4 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center text-white font-bold">
            SW
          </div>
          <div>
            <h3 className="text-sm font-bold text-blue-700 leading-tight">Scholar Workspace</h3>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
              Level: Advanced C1
            </p>
          </div>
        </div>
        <button
          className="w-full mt-4 bg-primary-gradient text-white py-3 rounded-xl font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
          onClick={() => setCurrentPage('practice')}
        >
          <span className="material-symbols-outlined text-sm">bolt</span>
          Start Daily Lesson
        </button>
      </div>
      <nav className="flex-1 space-y-1">
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            currentPage === 'library'
              ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
          }`}
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('library'); }}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span>Library</span>
        </a>
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            currentPage === 'practice'
              ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
          }`}
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('practice'); }}
        >
          <span className="material-symbols-outlined">mic_none</span>
          <span>Practice</span>
        </a>
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            currentPage === 'progress'
              ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
          }`}
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('progress'); }}
        >
          <span className="material-symbols-outlined">insights</span>
          <span>Progress</span>
        </a>
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            currentPage === 'topics'
              ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
          }`}
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('topics'); }}
        >
          <span className="material-symbols-outlined">topic</span>
          <span>Topics</span>
        </a>
        <a
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            currentPage === 'levels'
              ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
          }`}
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentPage('levels'); }}
        >
          <span className="material-symbols-outlined">equalizer</span>
          <span>Levels</span>
        </a>
      </nav>
      <div className="pt-4 mt-4 border-t border-outline-variant/20">
        <a
          className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-2 text-sm hover:text-blue-700 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">settings</span>
          <span>Settings</span>
        </a>
        <a
          className="flex items-center gap-3 text-slate-500 dark:text-slate-400 px-4 py-2 text-sm hover:text-blue-700 transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined text-sm">help_outline</span>
          <span>Support</span>
        </a>
      </div>
    </aside>
  );
};
