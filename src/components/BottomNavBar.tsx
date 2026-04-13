"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const BottomNavBar = () => {
  const pathname = usePathname();
  // Treat "/" as "/practice" for active state since we default to it
  const isPracticeActive = pathname === "/practice" || pathname === "/";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/85 backdrop-blur-md flex justify-around items-center py-4 px-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <Link
        href="/library"
        className={`flex flex-col items-center gap-1 ${pathname === "/library" ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="menu_book" style={pathname === "/library" ? { fontVariationSettings: "'FILL' 1" } : {}}>menu_book</span>
        <span className={`text-[10px] ${pathname === "/library" ? "font-bold" : ""}`}>Library</span>
      </Link>
      <Link
        href="/practice"
        className={`flex flex-col items-center gap-1 ${isPracticeActive ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="mic_none" style={isPracticeActive ? { fontVariationSettings: "'FILL' 1" } : {}}>mic_none</span>
        <span className={`text-[10px] ${isPracticeActive ? "font-bold" : ""}`}>Practice</span>
      </Link>
      <Link
        href="/progress"
        className={`flex flex-col items-center gap-1 ${pathname === "/progress" ? "text-primary" : "text-slate-500"}`}
      >
        <span className="material-symbols-outlined" data-icon="insights" style={pathname === "/progress" ? { fontVariationSettings: "'FILL' 1" } : {}}>insights</span>
        <span className={`text-[10px] ${pathname === "/progress" ? "font-bold" : ""}`}>Progress</span>
      </Link>
    </nav>
  );
};
