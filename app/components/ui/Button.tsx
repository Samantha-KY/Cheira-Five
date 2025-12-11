"use client";
import Link from "next/link";
import { forwardRef } from "react";

// Replace colors or radii via Tailwind classes below
// To change brand color: edit --primary in app/globals.css
// To adjust rounding: change rounded-xl/2xl usages here

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60 disabled:pointer-events-none";
const sizes = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};
const variants = {
  // Primary is green by default; on hover invert to white bg with green text
  primary: "bg-primary text-white border border-primary hover:bg-white hover:text-primary shadow-sm",
  // Outline becomes green with white text on hover; default uses brand color for better affordance
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-white/60",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, children, className = "", variant = "primary", size = "md", ...props }, ref) => {
    const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
