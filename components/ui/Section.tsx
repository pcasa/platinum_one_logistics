export function Section({
  children,
  id,
  className = ''
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-shell">{children}</div>
    </section>
  );
}
