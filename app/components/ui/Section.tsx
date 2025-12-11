import { ReactNode } from "react";

// To change container width or section paddings, modify the classes below
export function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({ title, cta, subtitle }: { title: string; subtitle?: string; cta?: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
        {subtitle ? <p className="text-foreground/70 text-sm md:text-base mt-1">{subtitle}</p> : null}
      </div>
      {cta}
    </div>
  );
}
