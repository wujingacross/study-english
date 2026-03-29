export const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary-gradient text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
      <span className="material-symbols-outlined">edit_square</span>
    </button>
  );
};
