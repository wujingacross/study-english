"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideNavBar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col p-4 pt-20 bg-slate-50 dark:bg-slate-950 bg-slate-100 dark:bg-slate-900 z-40 border-r border-slate-200 dark:border-slate-800">
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
        <button className="w-full mt-4 bg-primary-gradient text-white py-3 rounded-xl font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">bolt</span>
          Start Daily Lesson
        </button>
      </div>
      <nav className="flex-1 space-y-1">
        <Link
          href="/library"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/library"
              ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          }`}
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span>Library</span>
        </Link>
        <Link
          href="/"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/" || pathname === "/practice"
              ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          }`}
        >
          <span className="material-symbols-outlined">mic_none</span>
          <span>Practice</span>
        </Link>
        <Link
          href="/progress"
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            pathname === "/progress"
              ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold shadow-sm scale-[0.99]"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          }`}
        >
          <span className="material-symbols-outlined">insights</span>
          <span>Progress</span>
        </Link>
        <button
          className="w-full flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <span className="material-symbols-outlined">topic</span>
          <span>Topics</span>
        </button>
        <button
          className="w-full flex items-center gap-3 text-slate-600 dark:text-slate-400 px-4 py-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <span className="material-symbols-outlined">equalizer</span>
          <span>Levels</span>
        </button>
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
