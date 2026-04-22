export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-borderSubtle bg-panel-gradient p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/15">
      {children}
    </div>
  );
}
