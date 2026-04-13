import type { PageType } from "../App";

interface TopNavBarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export const TopNavBar = ({ currentPage, setCurrentPage }: TopNavBarProps) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm dark:shadow-none">
      <nav className="flex justify-between items-center w-full px-6 py-3">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            The Academic Editorial
          </span>
          <div className="hidden md:flex gap-6 items-center">
            <a
              className={`font-label text-sm uppercase tracking-wider transition-colors ${
                currentPage === 'library'
                  ? 'text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentPage('library'); }}
            >
              Library
            </a>
            <a
              className={`font-label text-sm uppercase tracking-wider transition-colors ${
                currentPage === 'practice'
                  ? 'text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentPage('practice'); }}
            >
              Practice
            </a>
            <a
              className={`font-label text-sm uppercase tracking-wider transition-colors ${
                currentPage === 'progress'
                  ? 'text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300'
              }`}
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentPage('progress'); }}
            >
              Progress
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 gap-2 border border-outline-variant/15">
            <span className="material-symbols-outlined text-outline text-sm">search</span>
            <input
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-48"
              placeholder="Search archives..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-all">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-all">
              analytics
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden ml-2 border border-outline-variant/30">
              <img
                alt="User profile avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAesDPV667ZhRZqOj68XEbsUYlDHR764FAHNN3pARX0h0X7HEjGYMTej-R37NEZgOMzArNHSoBi22z4k-f_5Pokpwi6VzkdkzP1cVs-rwq21p34Uvx4NO_q3EVG-KJnHVt1Gi8afwJED01_C6kdAzat_sMjvI4T-iof_ugf5d-qzz7ri3qnotdqX8GPv3hGZ1-aESkCSNJQoYCQ1VzoOaI59icnZx5GHJacC3_RFENOV3sXXEyvHIOJdWW48iQEVng-NCx_szxLjnY"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
