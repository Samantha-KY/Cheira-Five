import { ReactNode } from "react";

// Edit shadow/radius here for a consistent card style across the app
export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`group bg-surface rounded-2xl shadow-sm hover:shadow-md transition border border-muted/60 ${className}`}>
      {children}
    </div>
  );
}

export function CardMedia({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative rounded-xl overflow-hidden ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
