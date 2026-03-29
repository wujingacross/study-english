export const LearningVelocity = () => {
  return (
    <div className="md:col-span-5 bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
      <h3 className="font-label text-sm uppercase font-bold text-on-surface-variant mb-6">
        Learning Velocity
      </h3>
      <div className="relative h-48 flex items-end gap-1">
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[30%]"></div>
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[45%]"></div>
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[40%]"></div>
        <div className="flex-1 bg-primary-container rounded-t-full h-[65%]"></div>
        <div className="flex-1 bg-primary-container rounded-t-full h-[85%]"></div>
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[60%]"></div>
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[75%]"></div>
        <div className="flex-1 bg-primary-fixed-dim rounded-t-full h-[50%]"></div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <div className="p-3 bg-tertiary-container rounded-2xl">
          <span className="material-symbols-outlined text-white">trending_up</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-on-surface">+2.4k</p>
          <p className="text-xs text-on-surface-variant font-medium">
            New vocabulary units mastered this week
          </p>
        </div>
      </div>
    </div>
  );
};
